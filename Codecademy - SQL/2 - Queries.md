# Introduction
In this lesson, we will be learning different SQL commands to query a single table in a database.

One of the core purposes of the SQL language is to retrieve information stored in a database. This is commonly referred to as querying. Queries allow us to communicate with the database by asking questions and returning a result set with data relevant to the question.

We will be querying a database with one table named movies.

Let’s get started!

Fun fact: IBM started out SQL as SEQUEL (Structured English QUEry Language) in the 1970’s to query databases.

**Instructions**
1. We should get acquainted with the movies table.

In the editor, type the following:
```sql
SELECT * FROM movies;
```
What are the column names?

![p1](img/Queries-p1.jpg)

# Select
Previously, we learned that SELECT is used every time you want to query data from a database and * means all columns.

Suppose we are only interested in two of the columns. We can select individual columns by their names (separated by a comma):

```sql
SELECT column1, column2 
FROM table_name;
```

To make it easier to read, we moved FROM to another line.

Line breaks don’t mean anything specific in SQL. We could write this entire query in one line, and it would run just fine.

**Instructions**
1. Let’s only select the name and genre columns of the table.

In the code editor, type the following:
```sql
SELECT name, genre 
FROM movies;
```
2. Now we want to include a third column.

Edit your query so that it returns the name, genre, and year columns of the table.

**Answer**
```sql
SELECT name, genre, year 
FROM movies;
```
# As
Knowing how SELECT works, suppose we have the code below:
```sql
SELECT name AS 'Titles'
FROM movies;
```
Can you guess what AS does?

`AS` is a keyword in SQL that allows you to rename a column or table using an alias. The new name can be anything you want as long as you put it inside of single quotes. Here we renamed the name column as `Titles`.

Some important things to note:
- Although it’s not always necessary, it’s best practice to surround your aliases with single quotes.
- When using AS, the columns are not being renamed in the table. The aliases only appear in the result.

**Instructions**
1. To showcase what the AS keyword does, select the name column and rename it with an alias of your choosing.

Place the alias inside single quotes, like so:
```sql
SELECT name AS '______'
FROM movies;
```
Note in the result, that the name of the column is now your alias.

2. Edit the query so that instead of selecting and renaming the name column, select the imdb_rating column and rename it as IMDb.

**Answer**
```sql
SELECT imdb_rating AS 'IMDb'
FROM movies;
```

# Distinct
When we are examining data in a table, it can be helpful to know what distinct values exist in a particular column.

`DISTINCT` is used to return unique values in the output. It filters out all duplicate values in the specified column(s).

For instance,
```sql
SELECT tools 
FROM inventory;
```
might produce:
```
tools
Hammer
Nails
Nails
Nails
```
By adding `DISTINCT` before the column name,
```sql
SELECT DISTINCT tools 
FROM inventory;
```
the result would now be:
```sql
tools
Hammer
Nails
```

Filtering the results of a query is an important skill in SQL. It is easier to see the different possible genres in the movie table after the data has been filtered than to scan every row in the table.

**Instructions**
1. Let’s try it out. In the code editor, type:
```sql
SELECT DISTINCT genre 
FROM movies;
```
What are the unique genres?

2. Now, change the code so we return the unique values of the year column instead.

**Answer**
```sql
SELECT DISTINCT year 
FROM movies;
```

# Where
We can restrict our query results using the WHERE clause in order to obtain only the information we want.

Following this format, the statement below filters the result set to only include top rated movies (IMDb ratings greater than 8):
```sql
SELECT *
FROM movies
WHERE imdb_rating > 8;
```
How does it work?
- `WHERE` clause filters the result set to only include rows where the following condition is true.
- `imdb_rating > 8` is the condition. Here, only rows with a value greater than 8 in the imdb_rating column will be returned.
- The `>` is an operator. Operators create a condition that can be evaluated as either true or false.

Comparison operators used with the WHERE clause are:
```
= equal to
!= not equal to
> greater than
< less than
>= greater than or equal to
<= less than or equal to
```

There are also some special operators that we will learn more about in the upcoming exercises.

**Instructions**
1. Suppose we want to take a peek at all the not-so-well-received movies in the database.

In the code editor, type:
```sql
SELECT * 
FROM movies 
WHERE imdb_rating < 5;
```
2. Edit the query so that it will now retrieve all the recent movies, specifically those that were released after 2014.

Select all the columns using `*`.
