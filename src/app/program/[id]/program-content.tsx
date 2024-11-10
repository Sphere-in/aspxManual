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
  points?: string
  files: FileContent[]
}

const programs: Program[] = [
  {
    id: 1,
    title: "Create a simple web page with various server controls",
    points: "Hello World",
    description: "Demonstrate setting and use of server control properties, including AutoPostBack.",
    files: [
      {
        name: "ServerControls.aspx",
        language: "aspx",
        content: `<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ServerControls.aspx.cs" Inherits="YourNamespace.ServerControls" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Server Controls Demo</title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:ListBox ID="listBox1" runat="server" SelectionMode="Multiple">
                <asp:ListItem>Item 1</asp:ListItem>
                <asp:ListItem>Item 2</asp:ListItem>
                <asp:ListItem>Item 3</asp:ListItem>
            </asp:ListBox>
            <asp:Button ID="btnDisplay" runat="server" Text="Display Selected" OnClick="btnDisplay_Click" />
            <asp:TextBox ID="txtSelected" runat="server"></asp:TextBox>
            
            <br /><br />
            
            <asp:DropDownList ID="ddlItems" runat="server" AutoPostBack="true" OnSelectedIndexChanged="ddlItems_SelectedIndexChanged">
                <asp:ListItem>Item A</asp:ListItem>
                <asp:ListItem>Item B</asp:ListItem>
                <asp:ListItem>Item C</asp:ListItem>
            </asp:DropDownList>
            <asp:Label ID="lblSelected" runat="server"></asp:Label>
            
            <br /><br />
            
            <asp:DropDownList ID="ddlFontSize" runat="server" AutoPostBack="true" OnSelectedIndexChanged="ddlFontSize_SelectedIndexChanged">
                <asp:ListItem>12</asp:ListItem>
                <asp:ListItem>14</asp:ListItem>
                <asp:ListItem>16</asp:ListItem>
                <asp:ListItem>18</asp:ListItem>
            </asp:DropDownList>
            
            <br /><br />
            
            <asp:Image ID="imgPhoto" runat="server" ImageUrl="~/images/photo.jpg" AlternateText="Sample Photo" />
            
            <br /><br />
            
            <asp:CheckBox ID="chkBold" runat="server" Text="Bold" AutoPostBack="true" OnCheckedChanged="chkFormatting_CheckedChanged" />
            <asp:CheckBox ID="chkItalic" runat="server" Text="Italic" AutoPostBack="true" OnCheckedChanged="chkFormatting_CheckedChanged" />
            <asp:CheckBox ID="chkUnderline" runat="server" Text="Underline" AutoPostBack="true" OnCheckedChanged="chkFormatting_CheckedChanged" />
            
            <br /><br />
            
            <asp:RadioButton ID="rbRed" runat="server" Text="Red" GroupName="ColorGroup" AutoPostBack="true" OnCheckedChanged="rbColor_CheckedChanged" />
            <asp:RadioButton ID="rbGreen" runat="server" Text="Green" GroupName="ColorGroup" AutoPostBack="true" OnCheckedChanged="rbColor_CheckedChanged" />
            <asp:RadioButton ID="rbBlue" runat="server" Text="Blue" GroupName="ColorGroup" AutoPostBack="true" OnCheckedChanged="rbColor_CheckedChanged" />
            
            <br /><br />
            
            <asp:Label ID="lblFormatted" runat="server" Text="Sample Text"></asp:Label>
        </div>
    </form>
</body>
</html>`
      },
      {
        name: "ServerControls.aspx.cs",
        language: "csharp",
        content: `using System;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace YourNamespace
{
    public partial class ServerControls : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                // Initialize controls if needed
            }
        }

        protected void btnDisplay_Click(object sender, EventArgs e)
        {
            string selectedItems = "";
            foreach (ListItem item in listBox1.Items)
            {
                if (item.Selected)
                {
                    selectedItems += item.Text + ", ";
                }
            }
            txtSelected.Text = selectedItems.TrimEnd(', ');
        }

        protected void ddlItems_SelectedIndexChanged(object sender, EventArgs e)
        {
            lblSelected.Text = "Selected: " + ddlItems.SelectedItem.Text;
        }

        protected void ddlFontSize_SelectedIndexChanged(object sender, EventArgs e)
        {
            lblFormatted.Font.Size = Unit.Parse(ddlFontSize.SelectedValue);
        }

        protected void chkFormatting_CheckedChanged(object sender, EventArgs e)
        {
            ApplyFormatting();
        }

        protected void rbColor_CheckedChanged(object sender, EventArgs e)
        {
            ApplyFormatting();
        }

        private void ApplyFormatting()
        {
            lblFormatted.Font.Bold = chkBold.Checked;
            lblFormatted.Font.Italic = chkItalic.Checked;
            lblFormatted.Font.Underline = chkUnderline.Checked;

            if (rbRed.Checked) lblFormatted.ForeColor = System.Drawing.Color.Red;
            else if (rbGreen.Checked) lblFormatted.ForeColor = System.Drawing.Color.Green;
            else if (rbBlue.Checked) lblFormatted.ForeColor = System.Drawing.Color.Blue;
        }
    }
}`
      }
    ]
  },
  // Add other programs here...
]

interface ProgramContentProps {
  id: string
}

export default function ProgramContent({ id }: ProgramContentProps) {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{program.id}. {program.title}</h1>
          <p className="text-gray-600 mb-6">{program.description}</p>
          {program.points && <p className="text-gray-600 mb-6">{program.points}</p>}
        </div>
        <div className="lg:w-2/3">
          <div className="bg-white text-black shadow overflow-hidden rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Program Code:</h2>
                <div className="flex space-x-2 overflow-x-auto">
                  {program.files.map((file) => (
                    <button
                      key={file.name}
                      className={`px-3 py-1 rounded-md ${activeFile === file.name ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                      onClick={() => setActiveFile(file.name)}
                    >
                      {file.name}
                    </button>
                  ))}
                </div>
              </div>
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                <code>{program.files.find(f => f.name === activeFile)?.content || 'Select a file'}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}