import React, { useState } from "react";
import { Layout, Text, Card, List } from "@ui-kitten/components";
import { ScrollView } from "react-native";

const faqData = [
  {
    question: "What is CareShare?",
    answer:
      "CareShare is a platform designed to streamline charitable donations by connecting donors with NGOs, volunteers, and communities in need.",
  },
  {
    question: "How does CareShare work?",
    answer:
      "CareShare employs a sophisticated matching algorithm to connect donors with the most relevant NGOs or volunteers based on factors such as location, type of donation, and urgency.",
  },
  {
    question: "What can I donate through CareShare?",
    answer:
      "You can donate various items such as food, clothes, groceries, and other essential necessities through CareShare.",
  },
  {
    question: "How can I track my donations?",
    answer:
      "CareShare provides a transparent reporting system that allows you to track the status of your donations in real-time, from submission to delivery.",
  },
  {
    question: "Is my personal information secure on CareShare?",
    answer:
      "Yes, CareShare implements encryption, authentication, and authorization mechanisms to protect user data and ensure secure access.",
  },
  {
    question: "Can I use CareShare on my mobile device?",
    answer:
      "Yes, CareShare offers dedicated mobile apps for iOS and Android devices, providing a seamless and feature-rich experience on mobile.",
  },
  {
    question: "How can I get involved with CareShare as an NGO or volunteer?",
    answer:
      "NGOs and volunteers can partner with CareShare by reaching out through our website or mobile app to join our network and participate in donation distribution.",
  },
  {
    question:
      "How can I share my charitable activities on social media through CareShare?",
    answer:
      "CareShare enables easy sharing of charitable activities and contributions on social media platforms directly from the app.",
  },
  {
    question: "Is CareShare available in multiple languages?",
    answer:
      "Yes, CareShare offers support for multiple languages to make the platform accessible to a broader and more diverse user base.",
  },
  {
    question: "How can I provide feedback or report an issue with CareShare?",
    answer:
      "You can provide feedback or report issues with CareShare by contacting our support team through the app or website. Your input helps us continuously improve our platform.",
  },
  {
    question: "How do I donate through CareShare?",
    answer:
      "To donate, simply sign up or log in to your account, then navigate to the 'Donate' section where you can choose the type of donation you'd like to make and follow the prompts to complete the process.",
  },
  {
    question:
      "What happens if my donation doesn't reach the intended recipients?",
    answer:
      "If there are any issues with your donation reaching the intended recipients, please contact our support team immediately. We'll investigate the issue and ensure that your donation is properly distributed.",
  },
  {
    question: "Can I donate items other than food and clothes?",
    answer:
      "Yes, CareShare accepts a wide range of donations, including but not limited to food, clothes, household items, and essential necessities. If you have specific items you'd like to donate, please check the app for available options.",
  },
  {
    question: "How do you ensure the transparency of donations?",
    answer:
      "CareShare implements a transparent reporting system that provides donors with real-time updates on the status of their donations. Additionally, we work closely with partner organizations to ensure that donations are properly accounted for and distributed.",
  },
  {
    question: "Can I volunteer with CareShare?",
    answer:
      "Yes, CareShare welcomes volunteers to help with various tasks, including donation distribution, community outreach, and administrative support. If you're interested in volunteering, please reach out to our team for more information on available opportunities.",
  },
  {
    question: "How can I get involved in my community through CareShare?",
    answer:
      "There are several ways to get involved in your community through CareShare, including donating, volunteering, and spreading awareness about our platform. By actively participating, you can make a positive impact on those in need in your area.",
  },
];

const FaqPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePress = (index) => {
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  const renderItem = ({ item, index }) => (
    <Card style={{ marginVertical: 4 }} onPress={() => handlePress(index)}>
      <Text category="h6">{item.question}</Text>
      {selectedIndex === index && (
        <Text style={{ marginTop: 8 }}>{item.answer}</Text>
      )}
    </Card>
  );

  return (
    <Layout style={{ flex: 1, padding: 16 }}>
      <ScrollView>
        {faqData.map((item, index) => renderItem({ item, index }))}
      </ScrollView>
    </Layout>
  );
};

export default FaqPage;
