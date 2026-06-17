// src/services/chatService.js

const mockResponses = [
  "Based on your goals, I recommend focusing on Java, Spring Boot, and Microservices.",
  "To become a Solution Architect, start with System Design and Cloud technologies like AWS.",
  "The most in-demand skills currently are AI, Cloud Computing, Kubernetes, and Data Engineering.",
  "Consider obtaining AWS Solutions Architect Associate certification as your next step.",
  "For interview preparation, focus on DSA, System Design, and Spring Boot internals.",
];

export const getAIResponse = async (message) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomIndex = Math.floor(
        Math.random() * mockResponses.length
      );

      resolve(mockResponses[randomIndex]);
    }, 1500); // simulate AI thinking
  });
};