Project: `sales-recorder`

At the start of any task workflow output exactly:
ACK: PROJECT_SPEC_READ


Purpose: A Sales Assistant / Report gatherer that allows sales people record sales 
conversations or sales calls. After the salesperson has left a customer, this will prompt them to summarize
the conversation they had with the customer through voice to text transcription. The final result is that it outputs
the transcript for review.

During a sales call, we need this info recorded in order to produce a good record of what happened

# Brainstorming
1. Static list of questions to ask (from video)
2. Take input and separate into x questions (can add voice later)
3. Conversation to answer those questions (conversational needed now or later)
4. Respond and list questions not answered 
5. Generate report to break down topics, answers
6. Send report somewhere
7. Ability to add customized questions, specific questions to ask per sales person(where do these questions come from?)
8. Coaching
9. Failssafe box to type if voice recording fails
10. Look & Feel

What do you build first to learn the most, second to learn the most?

## F.0 Walking Skeleton (locally)
    [COMPLETED] F.0.1 Hello World is runnable on iOS emulator (no pipeline is in place yet)

## F.0.1 Walking Skeleton (Hello World is runnable on iPhone)
    F.1.2 Pipeline in place to build & push latest / aiblity to test on iPhone
        [PARTIAL] F.1.2.0 Push to Expo
        TODO
            We need money to push to TestFlight
            We need money to push to App Store.

## F.1 Use Case:
Sales Person finishes 4 hour convo with a customer. Leaves the customer.
Records a summary of the conversation had with the customer.  
Answers any important questions that were missed.
Report generated on convesation

    F.1.0 [COMPLETED] Provide this list of questions for a sales person to answer
        F.1.0.0 Company Name
        F.1.0.1 What was Topic of your conversation with the customer
        F.1.0.2 What is the customer's objectives
        F.1.0.3 What is the Timeline for the project
        F.1.0.4 Who are the Decision makers for the project
        F.1.0.5 Estimated Deal Size
        F.1.0.6 Decision Makers’ Goals, Likes, and Interests?
        F.1.0.7 Concerns
        F.1.0.8 Competition
        F.1.0.9 Budget
        F.1.0.10 Marketing Support Expectations
        F.1.0.11 Confidence Level
        F.1.0.12 Strategy
        F.1.0.13 What Does Success Look Like for Them?
        F.1.0.14 Procurement, Legal, Security? Gating step?
        F.1.0.15 Risk to Forecast Date?
    F.1.1 [COMPLETED] Answer those questions
    F.1.2 [COMPLETED] List questions not answered yet
    F.1.3 [IN PROGRESS] Formatted report with Answers
        F.1.3.0 Topic Answers
        F.1.3.1 What is their objective Answers
        F.1.3.2 Timeline Answers
        F.1.3.3 Decision makers Answers
    F.1.4 Download the report

## F.2 Use Case: Follow up questions
    F.2.0 Allow sales person to answer missed follow up questions
## F.3 Can send a report

## F.4 Can Transcribe with voice
    4.0 Ability to start recording a conversation
    4.1 Ability to record voice to answer questions. Answers are transcribed to text
    4.2 Shows each question checked off as it is answered in green
    4.3 Shows questions not answered in red
    4.3 Ability to stop recording a conversation

## F.5. Answer missed Follow-up questions with voice
    5.1 For each unanswerd question in red, allow the sales person to record a voice answer

## F.6. Download the transcript summary
    6.0 Ability to to download the transcript as a text file.

## F.7. Header, Title, Footer (Branding - Cambria Countertops) - skip and do this last
    7.0 Add a title to the app. Title should be in the header
    7.1 Add a good looking modern header and footer to the app.

## F.8. Copy the transcript to clipboard
    8.0 Ability to to copy the transcript to clipboard.

## F.9.Email the transcript
    9.0 Provide a way to email the transcript.
