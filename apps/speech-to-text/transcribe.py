import speech_recognition as sr


# Initialize recognizer class
r = sr.Recognizer()
# audio object
audio = sr.AudioFile("./audio_files/OSR_us_000_0010_8k.wav")
#read audio object and transcribe
with audio as source:
    audio = r.record(source)
    result = r.recognize_google(audio)


# if __name__ == "__main__":

print(result)
