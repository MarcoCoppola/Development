# Documentation Guidelines
Fonte: https://dev.liferay.com/participate/javadoc-guidelines

- Class: Initial and detailed description
- Constructor: with parameters
- Method:
	- Get by primary key
	- Deletes/Removes something
	* Get/search/count matching a single field
	- Get/search/count matching multiple fields
	- Get/search/count by field-to-keyword matching
	- Get/search/count by Combined Field Value and Field-to-Keyword Matching
	- Returning a boolean
	- Returning a count
	- [Returning a collection](#returning_collection)
	- Returning an ordered range of values
	- Returning ordered values NOT as a range of values
	- Returning a ranged collection
	- Describing overloaded methods
	- Password Policy Methods
	- Uses a property
- Parameter:
	- Primary key
	- Attribute/field
	- Boolean
	- ClassNameId
	- Entity (primary)
	- ServiceContext
	- And/or operator
	- Refer reader to more information
	- Ordered collection
	- Significantly varying values
	- Methodb

---

## Method

### Get/search/count matching a single field
Pattern: Returns <something> with the <field1>...<fieldn>
```java
/**
 * Returns the primary key of the user with the email address.
 *
 * ...
 * @return the user with the email address
 */
public long getUserIdByEmailAddress( ... , String emailAddress)
```
 
### <a name="returning_collection"></a>Returning a collection

Precede the reference to the entity instances with the term “all the”.

Method Description Pattern: Returns … all the <entities> …

Return Tag Pattern: the somethingsof this thing (Note, do not refer to the collection type; instead, refer to the something in plural form)
```java
/**
 * Returns all the organizations associated with the user.
 *
 * ...
 * @return the organizations associated with the user
 */
public List<Organization> getUserOrganizations(long userId)
```

Parameter

Boolean

When describing boolean parameters, always start the description with the word whether. Two common uses of a boolean parameter are the following:

The parameter indicates some condition. Therefore, describe the condition in terms of it being true.
The parameter indicates whether to do something. Therefore, describe the action to be performed when the parameter value is true.
/**
 * ...
 * @param male whether the user is male
 * ...
 * @param sendEmail whether to send the user an email notification about
 *        their new account
 * ...
 */
public User addUser(
			..., boolean male,
			..., boolean sendEmail,
			...)
 




Boolean

When describing boolean parameters, always start the description with the word whether. Two common uses of a boolean parameter are the following:

The parameter indicates some condition. Therefore, describe the condition in terms of it being true.
The parameter indicates whether to do something. Therefore, describe the action to be performed when the parameter value is true.
Example,

/**
 * ...
 * @param male whether the user is male
 * ...
 * @param sendEmail whether to send the user an email notification about
 *        their new account
 * ...
 */
public User addUser(
			..., boolean male,
			..., boolean sendEmail,
			...)
