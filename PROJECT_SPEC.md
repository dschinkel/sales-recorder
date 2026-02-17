Project: `sales-recorder`

Purpose: A Sales Assistant / Report gatherer that allows sales people record sales 
conversations or sales calls. After the salesperson has left a customer, this will prompt them to summarize
the conversation they had with the customer through voice to text transcription. The final result is that it outputs
the transcript for review.

During a sales call, we need this info recorded in order to produce a good record of what happened)

After Action Report
-------------------
Talk through phone
Helps them provide all the necessary information
This data -> salesforce -> history of interactions with a client
Future recommendations
We'll import this data into salesforce

Value
    doug hubbard - how to measure anything
        writing stuff to Buying information
    Riskiest assumption test (RAT) -> Hypothesis driven development
    Build to learn
    We'll be wrong
    What do I build to learn faster
    Build it to send to client OR build it to see if something works
Less focused on customer (only one way to buy information)
    Is subset of buying info

Results, is it
    Easy 
    Doable
    Helpful

Use Case sales person finishes 4 hour convo -> lunch -> Record the convo - > good report that tells what company what we need to know about what happened

Cambria

What tests are we making for the hypothesis that will allow us to learn

1. Static list of questions to ask (from video)
2. Take input and separate into x questions (can add voice later)
3. Conversation to answer those questions (conversational needed now or later)
4. Respond and list questions not answered 
5. Generate report to break down topics, answers
6. Send report somewhere
7. Ability to add customized questions, specific questions to ask per sales person (where do these questions come from?)
8. Coaching
9. Failssafe box to type if voice recording fails
10. Look & Feel

what do you build first to learn the most, second to learn the most

No voice, no conversation yet
=============================
Form
    1. Collect voice input on what questions to ask (get them from the video)

Form
    2 + 3 Answer questions

Submit
    4. Shows questions not answered
    Abiliy to answer those inline right there in the form

Finish
    5 + 6 Provides a downloadable transcript

With voice, via conversation
============================

## 0. Header, Title, Footer (Branding - Cambria Countertops)
0.2 Add a title to the app. Title should be in the header
0.1 Add a good looking modern header and footer to the app.

F.1 Use Case: Sales Person finishes 4 hour convo -> lunch -> Record the convo - > good report that tells what company what we need to know about what happened
F.2 Use Case: Follow up questions
F.3 Use Case: Can send the report

## F.0 Walking Skeleton (locally)
    [COMPLETED] F.0.1 Hello World is runnable on iOS emulator (no pipeline is in place yet)

## F.1 Walking Skeleton (Hello World is runnable on iPhone)
    F.1.2 Pipeline in place to build & push latest / aiblity to test on iPhone
        [COMPLETED] F.1.2.0 Push to Expo

## F.2 Use Case:
Sales Person finishes 4 hour convo with a customer. Leaves the customer.
Records a summary of the conversation had with the customer.  
Answers any important questions that were missed.
Report generated on convesation

    F.2.0 Prompt the sales person to fill out this set question
        F.2.0.0 What was Topic of your conversation with the customer
        F.2.0.1 What is the customer's objective
        F.2.0.2 What is the Timeline for the project
        F.2.0.3 Who are the Decision makers for the project
    F.2.1 Answer those questions
        F.2.1 Show the transcript below as they answer questions
    F.2.2 Show a list of questions not answered
    F.2.3 Formatted report with Answers
        F.2.3.0 Topic Answers
        F.2.3.1 What is their objective Answers
        F.2.3.2 Timeline Answers
        F.2.3.3 Decision makers Answers
    F.2.4 Download the report

## F.2 Use Case: Follow up questions
F.3 Use Case: Can send the report

## F.1. Record a conversation and save the transcript
0.3 Ability to start recording a conversation
0.4 Ability toto stop recording a conversation

## F.2. Transcribes voice to text
1.1 Transcribe the voice to text shows the transcription in the app.

## F.3 Review of transcription - follow-up questions
3.1 Score the transcription.  Did they answer the core questions?

## F.4. List Follow-up questions not answered yet
4.1 List the follow-up questions that were not answered yet

## F.5. Answer Follow-up questions through voice to text again
4.2 Provide a way to answer the follow-up questions via voice

## F.6. Download the transcript summary
2.1 Ability to to download the transcript as a text file.

## F.7. Copy the transcript to clipboard
2.2 Ability to to copy the transcript to clipboard.

## F.8.Email the transcript
3.1 Provide a way to email the transcript.


