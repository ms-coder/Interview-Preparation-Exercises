# C#

http://a4academics.com/interview-questions/52-dot-net-interview-questions/417-c-oops-interview-questions-and-answers?showall=&start=1

## What is C#

* Programming language (OOP, general pourpose)
* Type-safe
* Included in .NET framework, MONO, .NET core, UNITY
* As a part of .NET can be compiled into IL language (managed)

## Features of C#

* Properties
* Lambdas
* Garbage Collection

## List some of the advantages of C#?

* easy to learn
* no memory managament needed
* big community
* part of .Net and .Net core (open source)
* multi platform (as a part of .Net core)

## What are IDE’s provided by different companies for C# development?

* Visual Studio (Microsoft)
* Visual Studio Code (Microsoft | multiplatform, lightweight)
* MonoDevelop (Open Source | multiplatform, )
* Rider (Jet Brains)
* some small IDEs like sharpDevelop

## Explain the types of comments in C#

* // - line comments (single line)
* \/\*\*\/ - block comments (multi line)
* Documentation XML comments (above methods) - providing information about methods in Libraries

## Explain sealed class in C#?

* prevent inheritance for classes
* prevent overriding for methods

##  List out the differences between Array and ArrayList in C#?

* Array is a base data type, supported by CLR (common language runtime). ArrayList is a more complex data type, which implementation is based on Array. 
* ArrayList can be grow dynamical by adding new elements, Array - not.
* ArrayList can store elements of different datatypes (boxing/unboxing needed), not recommended, generic list is better

## Why to use “using” in C#?

It helps to work with instances implementing IDisposable interface. By leaving the scope of "using", the corresponding instance is disposed. Also in a case of any exception inside of the using block the "dispose" command will be sent.

## Explain namespaces in C#

* They group logical classes
* In different namespaces you can use same class names.
* With keyword "using", you can use a namespace in other namspace

## Why to use keyword “const” in C#? Give an example.

* The const field can be assigned only once. It keeps the reference (holds value) thorough the whole application. 
* Const fields are also static

## What is the difference between “constant” and “readonly” variables in C#?

* readonly variable can be changed/assgined in constructor

## Explain “static” keyword in C#

- Static classes

Static classes cannot be insatantiated
Static classes can have only static methods

- Static Methods

Static methods are called direct on class member, not on object instance.

## What is the difference between “dispose” and “finalize” variables in C#?

## How the exception handling is done in C#?

With "try...catch" block

<pre><code>
try {

} catch (Exception ex)
{

} filanlly
{

}
</code></pre>

If in try block an exception is thrown, the catch block is executed.

## Can we execute multiple catch blocks in C#?

* We can have multiple catch blocks, but only one of them is executed.
* Since C# 6 we have also exception filters: catch (Exception e) when (MyFilter(e))

## Why to use “finally” block in C#?

Finaly block is executed in both cases (exception was thrown / exception wasn't thrown), it is helpfull for eleminating/release connections to databases or I/O ressources.

## What is the difference between “finalize” and “finally” methods in C#?

Finalize allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.

## What is the difference between “throw ex” and “throw” methods in C#?

"throw ex" stack trace is overriden to the point, wehre ex was thrown
"throw" will keep stack trace

## Can we have only “try” block without “catch” block in C#?

Yes, but only with finally block

## List out two different types of errors in C#?

Compile Time Error
Run Time Error

## Do we get error while executing “finally” block in C#?

Yes

## Mention the assembly name where System namespace lies in C#?

mscorlib.dll

## What are the differences between static, public and void in C#?

void - the function has no return value (it is used where the type for the return value should stay)
static - is additional keyword, can be used for classes (class cannot be instantiated) and methods (methods are executed on class level, not on object level).
public - is an access modifier (the member is visible everywhere)

## What is the difference between “out” and “ref” parameters in C#?

## Explain Jagged Arrays in C#?

## Can we use “this” inside a static method in C#?

## What are value types in C#?

## What are reference types in C#?

## Can we override private virtual method in C#?


https://www.guru99.com/c-sharp-interview-questions.html


3. Can multiple catch blocks be executed?


4. What is the difference between public, static, and void?


5. What is an object?

6. Define Constructors


7. What is Jagged Arrays?


8. What is the difference between ref & out parameters?

9. What is the use of 'using' statement in C#?

10. What is serialization?
11. Can we use "this" command within a static method?


12. What is the difference between constants and read-only?


13. What is an interface class? Give one example of it

14. What are value types and reference types?

15. What are Custom Control and User Control?


16. What are sealed classes in C#?


17. What is method overloading?
18. What is the difference between Array and Arraylist?


19. Can a private virtual method can be overridden?

20. Describe the accessibility modifier "protected internal".


21. What are the differences between System.String and System.Text.StringBuilder classes?


22. What's the difference between the System.Array.CopyTo() and System.Array.Clone() ?

23. How can we sort the elements of the Array in descending order?

24. Write down the C# syntax to catch an exception


25. What's the difference between an interface and abstract class?

26. What is the difference between Finalize() and Dispose() methods?


27. What are circular references?

28. What are generics in C#.NET?


29. What is an object pool in .NET?
30. List down the commonly used types of exceptions in .net


31. What are Custom Exceptions?


32. What are delegates?


33. How do you inherit a class into other class in C#?


34. What is the base class in .net from which all the classes are derived from?

35. What is the difference between method overriding and method overloading?


36. What are the different ways a method can be overloaded?


37. Why can't you specify the accessibility modifier for methods inside the interface?
38. How can we set the class to be inherited, but prevent the method from being over-ridden?

39. What happens if the inherited interfaces have conflicting method names?

40. What is the difference between a Struct and a Class?


41. How to use nullable types in .Net?

42. How we can create an array with non-default values?

43. What is difference between "is" and "as" operators in c#?


44. What's a multicast delegate?


45. What are indexers in C# .NET?
46. What is difference between the "throw" and "throw ex" in .NET?

47. What are C# attributes and its significance?

48. How to implement a singleton design pattern in C#?

49. What is the difference between directcast and ctype?


50. Is C# code is managed or unmanaged code?

51. What is Console application?


52. Give an example of removing an element from the queue

-------------------

Short description for design patterns
