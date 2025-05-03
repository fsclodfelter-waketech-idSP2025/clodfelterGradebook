-- Create the STUDENTS table
CREATE TABLE STUDENTS (
    STUDENT_ID SERIAL PRIMARY KEY,
    FIRST_NAME VARCHAR(50),
    LAST_NAME VARCHAR(50),
    EMAIL VARCHAR(100),
    ENROLLMENT_DATE DATE
);

-- Create the ASSIGNMENTS table
CREATE TABLE ASSIGNMENTS (
    ASSIGNMENT_ID SERIAL PRIMARY KEY,
    TITLE VARCHAR(100),
    DESCRIPTION TEXT,
    DUE_DATE DATE,
    STUDENT_ID INT REFERENCES STUDENTS(STUDENT_ID)
);

-- Insert a student record for Franklin Clodfelter
INSERT INTO STUDENTS (FIRST_NAME, LAST_NAME, EMAIL, ENROLLMENT_DATE)
VALUES ('Franklin', 'Clodfelter', 'franklin.clodfelter@example.com', '2025-01-01');

-- Insert an assignment associated with the student (assuming STUDENT_ID = 1)
INSERT INTO ASSIGNMENTS (TITLE, DESCRIPTION, DUE_DATE, STUDENT_ID)
VALUES ('Lab7 PostgreSQL', 'Set up a database and insert records as described in the instructions.', '2025-01-15', 1);

-- Query to verify records with join
SELECT * FROM ASSIGNMENTS, STUDENTS
WHERE ASSIGNMENTS.STUDENT_ID = STUDENTS.STUDENT_ID;
