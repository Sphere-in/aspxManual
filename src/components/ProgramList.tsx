import Link from 'next/link';

const programs = [
  {
    id: 1,
    title: "Create a simple web page with various server controls",
    description: "Demonstrate setting and use of server control properties, including AutoPostBack."
  },
  {
    id: 2,
    title: "Count webpage submissions",
    description: "Create a simple web page to count the number of times the current webpage is submitted to the server on click event of a Button."
  },
  {
    id: 3,
    title: "Simple calculations application",
    description: "Perform operations like finding factorial value, money conversion, cube of a given number, and generating Fibonacci series."
  },
  {
    id: 4,
    title: "Calendar control operations",
    description: "Demonstrate the use of Calendar control for various operations like displaying messages, vacations, styling selected day, and calculating date differences."
  },
  {
    id: 5,
    title: "Ad rotator control",
    description: "Create a Web Form to demonstrate use of Ad rotator Control with five advertisements."
  },
  {
    id: 6,
    title: "Master Page with Styles and Themes",
    description: "Create a web application to demonstrate use of Master Page with applying Styles and Themes for page beautification."
  },
  {
    id: 7,
    title: "Feedback form",
    description: "Create a feedback form with a list box and submit button, displaying a message upon submission."
  },
  {
    id: 8,
    title: "Calorie calculator",
    description: "Calculate total calories from fat, carbohydrate, and protein input, displaying results and maintaining a count of entries."
  },
  {
    id: 9,
    title: "User registration with validation",
    description: "Create an application that accepts and validates user information including name, password, age, email, and user ID."
  },
  {
    id: 10,
    title: "Database operations with ASP.NET and ADO.NET",
    description: "Perform various database operations including displaying employee data, creating a login module, and CRUD operations on an employee table."
  }
  // ... (other programs with their respective 'code' property)
];

const ProgramList = () => {
  return (
    <ul className="space-y-6">
      {programs.map((program) => (
        <li key={program.id} className="bg-white shadow text-black overflow-hidden rounded-lg hover:shadow-md transition-shadow duration-300">
          <Link href={`/program/${program.id}`} className="block px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {program.id}. {program.title}
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              {program.description}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProgramList;