# C#

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

# Explain sealed class in C#?

* prevent inheritance for classes
* prevent overriding for methods

#  List out the differences between Array and ArrayList in C#?

* Array is a base data type, supported by CLR (common language runtime). ArrayList is a more complex data type, which implementation is based on Array. 
* ArrayList can be grow dynamical by adding new elements, Array - not.
* ArrayList can store elements of different datatypes (boxing/unboxing needed), not recommended, generic list is better

# Why to use “using” in C#?

It helps to work with instances implementing IDisposable interface. By leaving the scope of "using", the corresponding instance is disposed. Also in a case of any exception inside of the using block the "dispose" command will be sent.

# Explain namespaces in C#

