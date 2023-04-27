from transformers import pipeline

def get_first_letter_uppercase_and_rest_lowercase(text):
    """
    This function gets the first letter of the sentence uppercase and the rest of the letters lowercase while still retaining the pre-existing uppercase letters in a paragraph.
    Args:
        paragraph: The paragraph to process.
    Returns:
        The paragraph with the first letter of each sentence uppercase and the rest of the letters lowercase.
    """

    # Split the paragraph into sentences.
    sentences = text.split(".")

    # Loop over the sentences and capitalize the first letter.
    for i in range(len(sentences)):

        sentences[i] = sentences[i].strip()
        
        # Check if the first letter of the sentence is already uppercase.
        if len(sentences[i]) > 0 and sentences[i][0].islower():
            
            # If the first letter of the sentence is not already uppercase, then capitalize it.
            sentences[i] = sentences[i][0].upper() + sentences[i][1:]

    # Join the sentences back together.
    text = ". ".join(sentences)

    return text


def is_utf_encoding_friendly(text):
  """
  This function checks if a paragraph is UTF-encoding friendly.
  Args:
    paragraph: The paragraph to check.
  Returns:
    True if the paragraph is UTF-encoding friendly, False otherwise.
  """

  # Check if the paragraph contains any non-ASCII characters.
  for character in text:
    if ord(character) > 127:
      return False

  # The paragraph does not contain any non-ASCII characters.
  return True


def make_paragraph_utf_encoding_friendly(text):
  """
  This function makes a paragraph UTF-encoding friendly.
  Args:
    paragraph: The paragraph to process.
  Returns:
    The paragraph with all non-ASCII characters encoded in UTF-8.
  """

  # Check if the paragraph is UTF-encoding friendly.
  if not is_utf_encoding_friendly(text):

    # Convert the paragraph to a bytestring.
    paragraph_bytes = text.encode("utf-8")

    # Decode the bytestring to a Unicode string.
    paragraph_unicode = paragraph_bytes.decode("utf-8")

    # Return the Unicode string.
    return paragraph_unicode

  else:

    # Return the paragraph unchanged.
    return text


def generate_output(input_text):
    text = get_first_letter_uppercase_and_rest_lowercase(input_text)
    text = make_paragraph_utf_encoding_friendly(text)
    text = "summarize: " + input_text
    summarizer = pipeline("summarization", model="SahilKuw/442FinalProj")
    output = get_first_letter_uppercase_and_rest_lowercase(summarizer(text)[0]['summary_text'])
    return output

# text = '''The year is 2042. The world is a very different place than it was just a few decades ago. Climate change has ravaged the planet, and many cities have been abandoned due to rising sea levels. The global economy has collapsed, and there is widespread poverty and hunger. In this bleak and desperate world, a new kind of hero has emerged: the climate refugee.
# Climate refugees are people who have been forced to flee their homes due to the effects of climate change. They come from all walks of life and from all corners of the globe. They are farmers who have lost their crops to drought, fishermen who have been driven out of the sea by rising sea levels, and city dwellers who have been forced to leave their homes due to flooding or other natural disasters.
# Climate refugees are often met with hostility and discrimination when they arrive in new countries. They are often denied asylum, and they are often forced to live in squalid refugee camps. But despite the challenges they face, climate refugees are determined to rebuild their lives and to create a better future for themselves and their children.
# They are the pioneers of a new world, a world that is more sustainable and more equitable. They are the hope for the future.
# One such climate refugee is a young woman named Anya. She grew up in a small village in Bangladesh, but she was forced to flee her home when a cyclone destroyed her village. She now lives in a refugee camp in India, where she struggles to survive on meager rations. But Anya is determined to rebuild her life. She is studying to be a doctor, and she hopes to one day return to Bangladesh and help her people rebuild their homes and their lives.
# Anya is just one of millions of climate refugees around the world. They are the victims of a global crisis that we have all created. But they are also the heroes of our time. They are the ones who are fighting for a better future, and they are the ones who will ultimately save us all.
# '''
# print(generate_output(text))