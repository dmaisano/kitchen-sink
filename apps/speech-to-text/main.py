from pydub import AudioSegment
import os
import speech_recognition as sr
from glob import glob

"""
Reference:
    - https://stackoverflow.com/questions/38110384/convert-any-audio-file-to-mp3-with-python
    - https://www.geeksforgeeks.org/python-convert-speech-to-text-and-text-to-speech/
    - https://www.reddit.com/r/learnpython/comments/11ldwla/comment/jbcaqym/?utm_source=share&utm_medium=web2x&context=3
"""


def get_files_with_extension(directory: str, extension: str):
    directory = os.path.join(directory, '')
    if not extension.startswith('.'):
        extension = '.' + extension

    # Use glob to get all files with the specified extension
    files = glob(directory + '*' + extension)

    return files


def convert_amr_to_wav(file_path: str) -> None:
    base = os.path.splitext(file_path)[0]
    wav_file_path = f"{base}.wav"
    if os.path.exists(wav_file_path):
        return

    sound = AudioSegment.from_file(file_path)
    sound.export(wav_file_path, format="wav")


def transcribe_wav_files(conversion_extension: str = None) -> None:
    if conversion_extension is not None:
        audio_files = []
        if conversion_extension == ".amr":
            audio_files = get_files_with_extension("./audio_files/", conversion_extension)

        for file_path in audio_files:
            convert_amr_to_wav(file_path)

    audio_file_paths = get_files_with_extension("./audio_files/", ".wav")

    for file_path in audio_file_paths:
        transcribe_wav(file_path)



def transcribe_wav(file_path: str) -> None:
    r = sr.Recognizer()
    audio = sr.AudioFile(file_path)

    with audio as source:
        try:
            audio = r.record(source)
            result = r.recognize_google(audio)

            file_base_name = os.path.basename(file_path)
            file_base_name_no_ext = file_name = os.path.splitext(file_base_name)[0]
            txt_file = f"{file_base_name_no_ext}.txt"
            print(f"Transcribing {file_path} -> {txt_file}")
            with open(f"./transcribed/{txt_file}", 'w') as f:
                f.write(result)

        except Exception as e:
            print("Error transcribing file: ", file_path)
            print(e)
            return


if __name__ == "__main__":
    transcribe_wav_files(".amr")
    print("Did the thing")
