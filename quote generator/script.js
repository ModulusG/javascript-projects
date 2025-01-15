const quotes = [
  "When something is important enough, you do it even if the odds are not in your favor. - Elon Musk",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. - Steve Jobs",
  "We always overestimate the change that will occur in the next two years and underestimate the change that will occur in the next ten. - Bill Gates",
  "If you’re not a little bit scared, you’re not doing it right. - Mark Zuckerberg",
  "The biggest risk is not taking any risk... In a world that is changing really quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
  "Don’t worry about failure; you only have to be right once. - Drew Houston",
  "It’s not about ideas. It’s about making ideas happen. - Scott Belsky",
  "We’re always looking for the next great thing. We’re always looking for things that can have a big impact. - Sam Altman",
  "The best way to predict the future is to create it. - Peter Drucker",
  "If you’re not embarrassed by the first version of your product, you’ve launched too late. - Reid Hoffman",
  "I think it’s possible for ordinary people to choose to be extraordinary. - Elon Musk",
  "What you do is what matters, not what you think or say or plan. - Jason Fried",
  "Risk more than others think is safe. Dream more than others think is practical. - Howard Schultz",
  "We hire people who want to make the world a better place. - Jack Dorsey",
  "I’m convinced that about half of what separates the successful entrepreneurs from the non-successful ones is pure perseverance. - Steve Jobs",
  "The secret to success is to do the common thing uncommonly well. - John D. Rockefeller",
  "Success is a lousy teacher. It seduces smart people into thinking they can’t lose. - Bill Gates",
  "You should never be in the business of making the world a worse place. - Elon Musk",
  "Chase the vision, not the money; the money will end up following you. - Tony Hsieh",
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteElement = document.getElementById("quote");
  quoteElement.textContent = quotes[randomIndex];

  // Adding a small animation to the quote when it changes
  quoteElement.style.transform = "scale(1.1)";
  setTimeout(() => {
    quoteElement.style.transform = "scale(1)";
  }, 200);
}
