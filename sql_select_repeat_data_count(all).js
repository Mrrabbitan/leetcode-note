Write a SQL query to find all duplicate emails in a table named Person.

+----+---------+
| Id | Email   |
+----+---------+
| 1  | a@b.com |
| 2  | c@d.com |
| 3  | a@b.com |
+----+---------+
For example, your query should return the following for the above table:

+---------+
| Email   |
+---------+
| a@b.com |
+---------+
Note: All emails are in lowercase.

/*     answer __________________________________________the most important thing is to count(*) */

select DISTINCT Email from Person where Email in (
select Email from (
select Email,count(*) as total from Person group by Email
) t where total>1);

