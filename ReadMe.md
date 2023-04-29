# **HiLite: AI AutoHighlighter**

# About the Project: 📚

Students are really busy. In today's modern world, many students receive vast amounts of homework including plenty of reading. Many courses throughout college, in all fields, will require many pages of reading every single night. This can be overwhelming to even the most serious of students. To take that stress off students we aim to create a product that can highlight text to allow students to ingest the important parts of texts. To take in the important information when reading so you don’t have to highlight and reread, we present HiLite.

HiLite is an auto highlighter that automatically identifies and summarizes the text. It uses artificial intelligence to determine which parts of the text are most important based on various factors such as keywords, relevance, and context. Auto highlighter can assist users in quickly summarizing, organizing, and understanding the content of a text. Using HiLite will not only make getting through all your homework quicker but will make you more effective at learning information. This AI ensures that you will not miss any of the important details and will give you the best summary with all the useful information. Using this tool will improve both the effectiveness and the efficiency of studying for students all around the world.

Note that, the current status of this project only includes the summarizing model and not the highlighting of keywords.

# Goals, Environment, and Adaptation:

- ### Goals
  The main goal of the project is to develop an AI auto-highlighter that can help students quickly identify and retain important information from a document by summarizing the text.
- ### Environment

  The stakeholders for the system are:

  - Students who will use the AI auto-highlighter to study and complete academic tasks.
  - Educators who may recommend the tool to their students.
  - Academic institutions who may consider implementing the tool for their students.
  - Software developers who will develop, maintain, and update the tool.
  - Investors who may invest in the development and marketing of the tool.

- ### Adaptation
  The potential challenges or obstacles that may arise during the development of the system are:
  - The accuracy and efficiency of the algorithm may be challenging to achieve, especially when dealing with complex and technical documents.
  - Natural language processing techniques may not be able to extract all the necessary information from the document accurately.
  - The user interface may not be intuitive and user-friendly, reducing the adoption rate of the tool.
  - The implementation of the tool may require a significant investment of time and resources.
  - The competition from existing or emerging tools may reduce the market share of the AI auto-highlighter.

# Design and Implementation of the AI system

- ### LSTM Introduction

  As the demand for efficient and accurate information processing continues to grow, advancements in artificial intelligence have paved the way for innovative solutions, such as AI summarizers. One particularly promising approach involves the use of Long Short-Term Memory (LSTM) networks, a type of recurrent neural network architecture specifically designed to handle sequential data and learn long-term dependencies. In this context, the integration of LSTM networks into AI summarizers has the potential to significantly enhance their performance, leading to more contextually aware and coherent summaries. This introduction will explore the benefits of incorporating LSTM networks into AI summarizers and the implications of this cutting-edge technology for the future of information management and consumption.

- ### Our System

  To create a text summarization solution using LSTMs, We implement an Encoder-Decoder architecture with attention mechanism. This approach is commonly used in sequence-to-sequence learning tasks, such as machine translation and abstractive summarization.

  - #### Data Pre-Processing:

    Preprocess your text data (e.g., tokenization, lowercasing, and removing special characters).
    Split your dataset into training and validation (and optionally, test) sets.
    Convert the text data into sequences of integer values, using a pre-defined vocabulary and word-to-integer mapping. Pad the sequences to have the same length.

  - #### LSTM:

    Create an Encoder using LSTM layers. The Encoder processes the input text and generates a context vector that captures the information from the input sequence.
    Create a Decoder, also using LSTM layers. The Decoder takes the context vector generated by the Encoder and produces the output summary.
    Add an Attention mechanism between the Encoder and Decoder. Attention helps the model to focus on different parts of the input sequence when generating the output summary, improving the model's performance.

  - #### Attention Layer:
    Compile the model using an optimizer (e.g., Adam), a loss function (e.g., categorical cross-entropy), and evaluation metrics (e.g., accuracy).
    Train the model on your training set, using the validation set to monitor its performance and prevent overfitting.
  - #### Concatenate:
    Implement a method for generating summaries from the trained model, such as the beam search or greedy search algorithms.
    Use this method to generate summaries for new, unseen text data.

- ### LSTM Component

  - ##### Memory Cell:

    The memory cell is the central component of an LSTM cell, responsible for storing the long-term information. It can maintain its state over time, which helps in retaining information for longer durations.

  - #### Input Gate:

    The input gate determines how much of the new input data should be incorporated into the memory cell. It uses a sigmoid activation function, which produces values between 0 and 1, to weigh the importance of new input data. A value close to 0 means the input data is not important, while a value close to 1 indicates that the input data is significant and should be stored in the memory cell.

  - #### Forget Gate:
    The forget gate controls how much of the previous memory cell state should be retained or discarded. It also uses a sigmoid activation function, with values closer to 0 indicating that the past information should be forgotten, and values closer to 1 indicating that the information should be retained.
  - #### Output Gate:
    The output gate determines how much of the memory cell's state should be passed on to the next hidden state. It uses a sigmoid activation function to weigh the importance of the memory cell's information and then applies an Adam optimizer to the memory cell state, scaling the output between -1 and 1.

- ### LSTM Training

  During training, the LSTM learns the optimal weights for each of these gates, which allows it to determine which information is important and should be retained or discarded. This mechanism helps LSTMs to capture long-range dependencies in data effectively and makes them suitable for various applications, such as text generation, sentiment analysis, and time series forecasting.

  Despite their effectiveness, LSTMs can be computationally expensive, especially for long sequences. This limitation led to the development of more advanced architectures like the Transformer, which relies on self-attention mechanisms to efficiently process and model long-range dependencies in data. As a result, Transformer-based models have become state-of-the-art in many natural language processing tasks, but LSTMs still have their place in certain applications and continue to be researched and improved upon.

# Screenshots:

![frontend](/files/frontend.jpg?raw=true)

# Setup / Installation: 💻

To install the dependencies and devDependencies for this project, you can run the following commands:

    pip install transformers flask torch
    npm install axios

# Usage:

To use this project, download or clone the repository. Then, you can run the following command:
Running Flask Server: Open a terminal (python terminal)

    cd ui
    cd src
    flask run

When we run `flask run`, the flask server `app.py` will start running. Make sure to run it before running the frontend (next step)

Running React App (frontend): Open another terminal (node terminal)

    cd ui
    npm install
    npm start

This will start running the react application named `ui` at http://localhost:3000.

# Technologies Used: 🐍 ⚛️

- `Python`
- `Flask`
- `React.js` - `JavaScript`, `HTML`
- `CSS`
- `Hugging Face` Repository
- `PyTorch` Library
- `NLTK Stop Words` Library
- `Spacy` Library

# Credits:

List of contributors:

- Harshit Jain
- Yug Jarodiya
- Sahil Kuwadia
- Panav Sheth
- Leo Milligan III
- Jiahua Liu

# License

This project is licensed under the MIT License.
