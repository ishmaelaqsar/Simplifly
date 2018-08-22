# Simplifly

A Chrome extension to produce summaries of news articles. 

## How it words

### Scrape Article heading and body from the current active tab using jQuery.

### Pre-process the body by removing stop words and stemming words using the Porter Stemmer algorithm.

### Produce an array of sentence which will make up nodes in the graph.

### Produce the graph using TF-IDF values of the sentences and the cosine similarity as the weight between nodes.

### Run the graph through Google's PageRank algorthim.

### Choose the highest ranking nodes to produce a summary.