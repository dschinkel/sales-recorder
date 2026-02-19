import 'react-native';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from '../App';

it('lists sales questions', () => {
  const { getByText } = render(<App />);
  const expectedQuestions = [
    'Company Name',
    'What was Topic of your conversation with the customer',
    "What is the customer's objectives",
    'What is the Timeline for the project',
    'Who are the Decision makers for the project',
    'Estimated Deal Size',
    'Decision Makers’ Goals, Likes, and Interests?',
    'Concerns',
    'Competition',
    'Budget',
    'Marketing Support Expectations',
    'Confidence Level',
    'Strategy',
    'What Does Success Look Like for Them?',
    'Procurement, Legal, Security? Gating step?',
    'Risk to Forecast Date?',
  ];

  expectedQuestions.forEach((question) => {
    expect(getByText(question)).toBeTruthy();
  });
});

it('shows answer for a specific question', () => {
  const { getAllByPlaceholderText, getByDisplayValue } = render(<App />);
  const firstInput = getAllByPlaceholderText('Type answer here...')[0];

  fireEvent.changeText(firstInput, 'Acme Corp');

  expect(getByDisplayValue('Acme Corp')).toBeTruthy();
});

it('shows count of unanswered questions and updates when answered', () => {
  const { getByText, getAllByPlaceholderText } = render(<App />);

  expect(getByText('Unanswered: 16')).toBeTruthy();

  const firstInput = getAllByPlaceholderText('Type answer here...')[0];
  fireEvent.changeText(firstInput, 'Acme');

  expect(getByText('Unanswered: 15')).toBeTruthy();
});

it('shows formatted report with all answers in real-time', () => {
  const { getByText, getAllByPlaceholderText, getAllByText } = render(<App />);

  expect(getByText('Live Summary Report')).toBeTruthy();

  const firstInput = getAllByPlaceholderText('Type answer here...')[0];
  fireEvent.changeText(firstInput, 'Acme Corp');

  expect(getAllByText('Company Name').length).toBe(2);
  expect(getByText('Acme Corp')).toBeTruthy();

  expect(getAllByText('Concerns').length).toBe(1);
});
