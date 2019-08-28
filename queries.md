# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT p.ProductName, c.CategoryName
FROM Products AS p
JOIN Categories AS C
	ON p.CategoryID = c.CategoryID;

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT o.OrderID, s.ShipperName
FROM Orders AS o
JOIN Shippers AS s
	ON o.ShipperID = s.ShipperID
WHERE o.OrderDate < 1997-01-09;

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT o.Quantities, p.ProductNames
FROM OrderDetails AS o
JOIN Products AS p
	ON o.ProductID = p.ProductID
ORDER BY p.ProductNames;

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT o.Quantity, p.ProductName
FROM OrderDetails AS o
JOIN Products AS p
	ON o.ProductID = p.ProductID
WHERE o.OrderID = 10251
ORDER BY p.ProductName;

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 