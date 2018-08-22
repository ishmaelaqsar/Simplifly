# Simplifly

A Chrome extension to produce summaries of news articles. 

## How it words

### 1. Scrape Article heading and body from the current active tab using jQuery.

### 2. Pre-process the body by removing stop words and stemming words using the Porter Stemmer algorithm.

### 3. Produce an array of sentence which will make up nodes in the graph.

### 4. Produce the graph using TF-IDF values of the sentences and the cosine similarity as the weight between nodes.

### 5. Run the graph through Google's PageRank algorithm.

### 6. Choose the highest ranking nodes to produce a summary.