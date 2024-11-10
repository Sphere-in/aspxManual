'use client'

import { useState } from 'react'
import Link from 'next/link'

interface FileContent {
  name: string
  content: string
  language: string
}

interface Program {
  id: number
  title: string
  description: string
  files: FileContent[]
}

const programs: Program[] = [
  {
    id: 10,
    title: "Database operations with ASP.NET and ADO.NET",
    description: "Perform various database operations including displaying employee data, creating a login module, and CRUD operations on an employee table.",
    files: [
      {
        name: "EmployeeList.aspx",
        language: "aspx",
        content: `<asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="false" DataKeyNames="EmpName"> 
  <Columns> 
    <asp:BoundField DataField="EmpName" HeaderText="Employee Name" /> 
    <asp:BoundField DataField="DeptId" HeaderText="Department ID" /> 
  </Columns> 
</asp:GridView> 
<asp:SqlDataSource ID="SqlDataSource1" runat="server" 
  ConnectionString="<%$ ConnectionStrings:YourConnectionString %>" 
  SelectCommand="SELECT EmpName, DeptId FROM Employee"> 
</asp:SqlDataSource>`
      },
      {
        name: "Login.aspx.cs",
        language: "csharp",
        content: `using System;
using System.Data.SqlClient;

public partial class Login : System.Web.UI.Page 
{
    protected void LoginButton_Click(object sender, EventArgs e)
    {
        string username = UsernameTextBox.Text;
        string password = PasswordTextBox.Text;

        string connectionString = "YourConnectionString";
        using (SqlConnection connection = new SqlConnection(connectionString))
        {
            connection.Open();
            string query = "SELECT COUNT(*) FROM Users WHERE Username = @Username AND Password = @Password";
            using (SqlCommand command = new SqlCommand(query, connection))
            {
                command.Parameters.AddWithValue("@Username", username);
                command.Parameters.AddWithValue("@Password", password);

                int count = (int)command.ExecuteScalar();
                if (count == 1)
                {
                    Response.Redirect("EmployeeList.aspx");
                }
                else
                {
                    // Display an error message for unsuccessful login
                }
            }
        }
    }
}`
      },
      // Add other files here...
    ]
  },
  // Add other programs here...
]

interface ProgramContentProps {
  id: string
}

export default function ProgramContent({ id = "10" }: ProgramContentProps) {
  const program = programs.find(p => p.id === parseInt(id))
  const [activeFile, setActiveFile] = useState(program?.files[0]?.name || '')

  if (!program) {
    return (
      <>
        <Link href="/" className="text-blue-500 hover:text-blue-700 mb-4 inline-block">&larr; Back to Programs</Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Program not found</h1>
      </>
    )
  }

  return (
    <>
      <Link href="/" className="text-blue-500 hover:text-blue-700 mb-4 inline-block">&larr; Back to Programs</Link>
      <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
        <div className="lg:w-1/3">
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{program.id}. {program.title}</h1>
            <p className="text-gray-600">{program.description}</p>
          </div>
        </div>
        <div className="lg:w-2/3">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Program Code</h2>
              <div className="mb-4 overflow-x-auto whitespace-nowrap">
                {program.files.map((file) => (
                  <button
                    key={file.name}
                    className={`px-3 py-2 rounded-md mr-2 ${
                      activeFile === file.name
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                    onClick={() => setActiveFile(file.name)}
                  >
                    {file.name}
                  </button>
                ))}
              </div>
              <div className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                <pre className="text-sm">
                  <code>{program.files.find(f => f.name === activeFile)?.content || 'Select a file'}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}