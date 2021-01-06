# Introduction to SQL

SQL, **S**tructured **Q**uery **L**anguage, is a programming language designed to manage data stored in relational databases. SQL operates through simple, declarative statements. This keeps data accurate and secure, and helps maintain the integrity of databases, regardless of size.

The SQL language is widely used today across web frameworks and database applications. Knowing SQL gives you the freedom to explore your data, and the power to make better decisions. By learning SQL, you will also learn concepts that apply to nearly every data storage system.

The statements covered in this course use SQLite Relational Database Management System (RDBMS). You can also access a glossary of all the SQL commands taught in this course.

**Instructions**
1. Let’s begin by entering a SQL command.

In the code editor, type:
```sql
SELECT * FROM celebs;
```

You will run all of your SQL commands in this course by pressing the Run button at the bottom of the code editor.

**Answer**
```sql
SELECT * FROM celebs;
```

![p1](img/Manipulation-p1.png)

# Relational Databases
Nice work! In one line of code, you returned information from a relational database.
```sql
SELECT * FROM celebs;
```

We’ll take a look at what this code means soon, for now, let’s focus on what relational databases are and how they are organized.

- A *relational database* is a database that organizes information into one or more tables. Here, the relational database contains one table.
- A *table* is a collection of data organized into rows and columns. Tables are sometimes referred to as relations. Here the table is `celebs`.
- A *column* is a set of data values of a particular type. Here, `id`, `name`, and `age` are the columns.
- A *row* is a single record in a table. The first row in the celebs table has:
  - An `id` of 1
  - A `name` of Justin Bieber
  - An `age` of 22

All data stored in a relational database is of a certain data type. Some of the most common data types are:
  - `INTEGER`, a positive or negative whole number
  - `TEXT`, a text string
  - `DATE`, the date formatted as YYYY-MM-DD
  - `REAL`, a decimal value
  
  
  Statements
The code below is a SQL statement. A statement is text that the database recognizes as a valid command. Statements always end in a semicolon ;.
```sql
CREATE TABLE table_name (
   column_1 data_type, 
   column_2 data_type, 
   column_3 data_type
);
```

Let’s break down the components of a statement:
- `CREATE TABLE` is a clause. Clauses perform specific tasks in SQL. By convention, clauses are written in capital letters. Clauses can also be referred to as commands.
- `table_name` refers to the name of the table that the command is applied to.
- `(column_1 data_type, column_2 data_type, column_3 data_type)` is a parameter. A parameter is a list of columns, data types, or values that are passed to a clause as an argument. Here, the parameter is a list of column names and the associated data type.

The structure of SQL statements vary. The number of lines used does not matter. A statement can be written all on one line, or split up across multiple lines if it makes it easier to read. In this course, you will become familiar with the structure of common statements.

**Instructions**
1. Let’s take a closer look at the statement we wrote before. In the code editor, type:
```sql
SELECT * FROM celebs;
```

Run the code to observe the results, and ask yourself:

Which parts of the statement are the clauses?
What table are we applying the command to?
Uncover the hint to view the answers, and then proceed to the next exercise.

**Answer and Hint**
SELECT and FROM are the clauses here.
We are applying the command to the celebs table.
