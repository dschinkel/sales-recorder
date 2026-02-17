import 'react-native';
import React from 'react';
import App from '../App';
import {render, fireEvent} from '@testing-library/react-native';

it('renders correctly', () => {
  const {getByText} = render(<App />);
  expect(getByText('Sales Recorder')).toBeTruthy();
});

it('lists all sales questions', () => {
  const {getByText} = render(<App />);
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

  expectedQuestions.forEach(question => {
    expect(getByText(question)).toBeTruthy();
  });
});

it('updates answer for a specific question', () => {
  const {getByPlaceholderText, getByDisplayValue} = render(<App />);
  const inputs = getByPlaceholderText('Type answer here...');
  const firstInput = Array.isArray(inputs) ? inputs[0] : inputs;

  fireEvent.changeText(firstInput, 'Acme Corp');

  expect(getByDisplayValue('Acme Corp')).toBeTruthy();
});

it('shows count of unanswered questions and updates when answered', () => {
  const {getByText, getAllByPlaceholderText} = render(<App />);

  // Initially, all questions are unanswered
  expect(getByText('Unanswered: 16')).toBeTruthy();

  // Answer the first question
  const firstInput = getAllByPlaceholderText('Type answer here...')[0];
  fireEvent.changeText(firstInput, 'Acme');

  // One fewer unanswered question now
  expect(getByText('Unanswered: 15')).toBeTruthy();
});

it('displays formatted report with all answers in real-time', () => {
  const {getByText, getAllByPlaceholderText, queryByText} = render(<App />);

  expect(getByText('Live Summary Report')).toBeTruthy();

  const firstInput = getAllByPlaceholderText('Type answer here...')[0];
  fireEvent.changeText(firstInput, 'Acme Corp');

  expect(getByText('Company Name')).toBeTruthy();
  expect(getByText('Acme Corp')).toBeTruthy();

  expect(queryByText('Concerns')).toBeNull();
});
