# Challenge Description

In this challenge, you will be responsible for creating two microservices: **enrollment-service** and **exam-service**. The goal is to develop APIs that manage test taker enrollments and exam starts, ensuring a decoupled architecture where the failure of one service does not affect the other.

## Services to be Created

### 1. enrollment-service
- **Responsibility**: Manage test taker enrollments.
- **Endpoint**: `POST /enrollment`
- **Request Body**
```json
{
    "candidateId": "uuid",
    "formId": "uuid",
}
```
- **Response Body**
```json
{
    "enrollmentId": "uuid"
}
```

#### Requirements:
- The API response time must be under 1 second.
- The service must persist an Enrollment entity based on the schema below (not restricted to. Please feel free to adapt it if necessary).
```json
{
    "id": "uuid",
    "createdAt": "timestamp",
    "updatedAt": "timestamp",
    "candidateId": "uuid",
    "formId": "uuid",
}
```

---

### 2. exam-service
- **Responsibility**: Serve the exam to test takers.
- **Endpoint**: `POST /start/:answerSheetId`
- **Empty request and response bodies**

#### Requirements:
- The service must create an AnswerSheet entity based on the schema below (not restricted to. Please feel free to adapt it if necessary). 
```json
{
    "id": "uuid",
    "createdAt": "timestamp",
    "updatedAt": "timestamp",
    "candidateId": "uuid",
    "formId": "uuid",
    "status": "NOT_STARTED | STARTED | SUBMITTED",
    "startedAt": "timestamp",
    "submittedAt": "timestamp"
}
```
- If the AnswerSheet entity already exists, the API should only update the status and dates, **as long as its status is NOT_STARTED**
- The API must return the exam content to the candidate, obtained by running the provided exam-packing-service project and calling its `/generate` API (see last section of this document).
- The content returned by the `/start` endpoint must match the payload returned by exam-packing-service's `/generate`.
- The API response time must be under 1 second.

---

## Guidelines
- **Decoupling**: The APIs must operate independently. The unavailability of one service should not impact the functionality of the API.
- **Performance**: All requests should be processed within 1 second.
- **Documentation**: Include clear documentation on how to run and test the services.

---

## Submission
Please submit the source code for both services by e-mail, along with instructions on how to run and test them.

---

## Evaluation Criteria
- **Functionality**: Does the service meet the specified requirements?
- **Code Quality**: Is the code clean, well-structured, and following best development practices?
- **Best Practices**: Are best practices and conventions for the adopted languages and frameworks being followed?
- **Performance**: Do the services meet the response time requirement?
- **Documentation**: Is the documentation clear and helpful for execution and testing?
- **Additional Considerations**: Any extra measures that enhance the development process will be viewed positively.

---

## Stack
- Microservices must be created using **Node.js** with **Nest.js**.
- Database must be **Postgres**.
- Other suggestions (not mandatory and not restricted to): **Redis** for caching, **Bull** for messaging.

---

## Running exam-packing-service
Execute the following command
```bash
node ./exam-packing-service.js
```

And the output should be
```
POST http://localhost:3123/exam-packing-service/answer-sheet-contents/v1/:formId/generate
```
