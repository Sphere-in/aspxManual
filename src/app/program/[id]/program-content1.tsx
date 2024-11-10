'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Program {

    id: number;
    title: string;
    description: string;
    points?: string;
    aspx: string;
    csharp: string;
    css?: string;
    webconfig?: string;
    sql?: string;
    xml?: string;
    EmployeeListaspx?: string;
    EmployeeListaspxcs?: string;
    Loginaspx?: string;
    Loginaspxcs?: string;
    EmployeeInsertaspx?: string;
    EmployeeInsertaspxcs?: string;
    UpdateSalaryaspx?: string;
    UpdateSalaryaspxcs?: string;
    DeleteEmployeeaspx?: string;
    DeleteEmployeeaspxcs?: string;
}

const programs: Program[] = [
    {
        id: 1,
        title: "Create a simple web page with various server controls",
        points: "Hello World",
        description: "Demonstrate setting and use of server control properties, including AutoPostBack.",
        aspx: `<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ServerControls.aspx.cs" Inherits="YourNamespace.ServerControls" %>

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
</html>`,
        csharp: `using System;
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
}`,
    },
    {
        id: 2,
        title: "Page Submission Counter",
        description: "Create a simple web page to count the number of times the current webpage is submitted to the server onclick event of a Button",
        aspx: `<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="YourNamespace.WebForm1" %> 
 
            <!DOCTYPE html> 
            
            <html xmlns="http://www.w3.org/1999/xhtml"> 
                <head runat="server"> 
                    <title>Submit Counter</title> 
                </head> 
                <body> 
                    <form id="form1" runat="server"> 
                        <div> 
                            <h1>Submit Counter</h1> 
                            <asp:Button ID="btnSubmit" runat="server" Text="Submit" OnClick="btnSubmit_Click" /> 

                            <br /> 

                            <asp:Label ID="lblSubmitCount" runat="server" Text="Number of Submissions: 0"></asp:Label> 
                        </div> 
                    </form> 
                </body> 
            </html>`,
        csharp:
            `using System;
namespace YourNamespace 
{ 
    public partial class WebForm1 : System.Web.UI.Page 
    { 
        protected void Page_Load(object sender, EventArgs e) 
        { 
            if (!IsPostBack) 
            { 
                // Initialize the submission count to 0 on the first page load. 
                Session["SubmitCount"] = 0; 
            } 
 
            // Display the current submission count. 
            lblSubmitCount.Text = "Number of Submissions: " + Session["SubmitCount"]; 
        } 
 
        protected void btnSubmit_Click(object sender, EventArgs e) 
        { 
            // Increase the submission count on button click. 
            int submitCount = (int)Session["SubmitCount"]; 
            submitCount++; 
            Session["SubmitCount"] = submitCount; 
 
            // Update the label to display the updated count. 
            lblSubmitCount.Text = "Number of Submissions: " + submitCount; 
        } 
    } 
}`,
        webconfig: ``,
        sql: ``
    },
    {
        id: 3,
        title: "Simple calculations application",
        description: "Perform operations like finding factorial value, money conversion, cube of a given number, and generating Fibonacci series.",
        aspx: `<%@ Page Language="C#" AutoEventWireup="true" 
CodeBehind="Operations.aspx.cs" Inherits="YourNamespace.Operations" %> 
 
<!DOCTYPE html> 
<html> 
<head> 
    <title>Operations</title> 
</head> 
<body> 
    <form runat="server"> 
        <div> 
            <h2>Operations</h2> 
 
            <label for="factorialInput">Factorial Value:</label> 
            <asp:TextBox ID="factorialInput" runat="server"></asp:TextBox> 
            <asp:Button ID="btnFactorial" runat="server" Text="Calculate Factorial" OnClick="btnFactorial_Click" /> 
            <asp:Label ID="factorialResult" runat="server" Text=""></asp:Label> 
            <br /> 
 
            <label for="moneyInput">Money Conversion:</label> 
            <asp:TextBox ID="moneyInput" runat="server"></asp:TextBox> 
            <asp:Button ID="btnMoney" runat="server" Text="Convert Money" OnClick="btnMoney_Click" /> 
            <asp:Label ID="moneyResult" runat="server" Text=""></asp:Label> 
            <br /> 
 
            <label for="cubeInput">Cube of Number:</label> 
            <asp:TextBox ID="cubeInput" runat="server"></asp:TextBox> 
            <asp:Button ID="btnCube" runat="server" Text="Calculate Cube" OnClick="btnCube_Click" /> 
            <asp:Label ID="cubeResult" runat="server" Text=""></asp:Label> 
            <br /> 
 
            <label for="fibonacciInput">Generate Fibonacci Series:</label> 
            <asp:TextBox ID="fibonacciInput" runat="server"></asp:TextBox> 
            <asp:Button ID="btnFibonacci" runat="server" Text="Generate Fibonacci" OnClick="btnFibonacci_Click" /> 
            <asp:Label ID="fibonacciResult" runat="server" Text=""></asp:Label> 
        </div> 
    </form> 
</body> 
</html>`,
        csharp: `using System; 
using System.Web.UI; 
 
namespace YourNamespace 
{ 
    public partial class Operations : Page 
    { 
        protected void btnFactorial_Click(object sender, EventArgs e) 
        { 
            if (int.TryParse(factorialInput.Text, out int number)) 
            { 
                long factorial = CalculateFactorial(number); 
                factorialResult.Text = $"Factorial of {number} is {factorial}"; 
            } 
            else 
            { 
                factorialResult.Text = "Invalid input. Please enter a valid integer."; 
            } 
        } 
 
        private long CalculateFactorial(int number) 
        { 
            if (number == 0 || number == 1) 
                return 1; 
            else 
                return number * CalculateFactorial(number - 1); 
        } 
 
        protected void btnMoney_Click(object sender, EventArgs e) 
        { 
            if (decimal.TryParse(moneyInput.Text, out decimal amount)) 
            { 
                // Implement money conversion logic here. 
                // Example: Convert from one currency to another. 
                moneyResult.Text = $"Converted amount: {amount}"; 
            } 
            else 
            { 
                moneyResult.Text = "Invalid input. Please enter a valid number."; 
            } 
        } 
 
        protected void btnCube_Click(object sender, EventArgs e) 
        { 
            if (double.TryParse(cubeInput.Text, out double num)) 
            { 
                double cube = Math.Pow(num, 3); 
                cubeResult.Text = $"Cube of {num} is {cube}"; 
            } 
            else 
            { 
                cubeResult.Text = "Invalid input. Please enter a valid number."; 
            } 
        } 
 
        protected void btnFibonacci_Click(object sender, EventArgs e) 
        { 
            if (int.TryParse(fibonacciInput.Text, out int n)) 
            { 
                string fibonacciSeries = GenerateFibonacciSeries(n); 
                fibonacciResult.Text = $"Fibonacci Series: {fibonacciSeries}"; 
            } 
            else 
            { 
                fibonacciResult.Text = "Invalid input. Please enter a valid integer."; 
            } 
        } 
 
        private string GenerateFibonacciSeries(int n) 
        { 
            int a = 0, b = 1; 
            string series = $"{a}, {b}"; 
 
            for (int i = 2; i < n; i++) 
            { 
                int c = a + b; 
                series += $", {c}"; 
                a = b; 
                b = c; 
            } 
 
            return series; 
        } 
    } 
}`
    },
    {
        id: 4,
        title: "Calendar control operations",
        description: "Demonstrate the use of Calendar control for various operations like displaying messages, vacations, styling selected day, and calculating date differences.",
        aspx: 
`<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="YourNamespace.WebForm1" %> 
 
<!DOCTYPE html> 
<html> 
<head> 
    <title>Calendar Operations</title> 
</head> 
<body> 
    <form runat="server"> 
        <div> 
            <h2>Calendar Operations</h2> 
 
            <asp:Calendar ID="calendarControl" runat="server" OnSelectionChanged="calendarControl_SelectionChanged"></asp:Calendar> 
 
            <hr /> 
 
            <asp:Label ID="messageLabel" runat="server" Text="Messages:"></asp:Label><br /> 
            <asp:Label ID="messageDisplay" runat="server" Text="" CssClass="messageLabel"></asp:Label> 
 
            <br /> 
 
            <asp:Label ID="vacationLabel" runat="server" Text="Vacation Dates:"></asp:Label><br /> 
            <asp:Label ID="vacationDisplay" runat="server" Text="" CssClass="vacationLabel"></asp:Label> 
 
            <br /> 
 
            <asp:Label ID="selectedDateLabel" runat="server" Text="Selected Date:"></asp:Label><br /> 
 
            <asp:Label ID="selectedDateDisplay" runat="server" Text="" CssClass="selectedDateLabel"></asp:Label> 
 
            <br /> 
 
            <asp:Label ID="dateDifferenceLabel" runat="server" Text="Date Difference:"></asp:Label><br /> 
            <asp:Label ID="dateDifferenceDisplay" runat="server" Text=""></asp:Label> 
        </div> 
    </form> 
</body> 
</html> `,
        csharp: `using System; 
using System.Collections.Generic; 
 
namespace YourNamespace 
{ 
    public partial class WebForm1 : System.Web.UI.Page 
    { 
        protected void Page_Load(object sender, EventArgs e) 
        { 
            if (!IsPostBack) 
            { 
                // Example messages on specific dates (you can customize these). 
                Dictionary<DateTime, string> messages = new Dictionary<DateTime, string> 
                { 
                    { new DateTime(2023, 10, 5), "Meeting with Client" }, 
                    { new DateTime(2023, 10, 10), "Project Deadline" }, 
                    { new DateTime(2023, 10, 25), "Team Lunch" } 
                }; 

                // Display messages on the calendar. 
                foreach (var message in messages) 
                { 
                    calendarControl.SelectedDates.Add(message.Key); 
                } 
            } 
        } 
 
        protected void calendarControl_SelectionChanged(object sender, EventArgs e) 
        { 
            // Display the selected date. 
            DateTime selectedDate = calendarControl.SelectedDate; 
            selectedDateDisplay.Text = selectedDate.ToShortDateString(); 
 
            // Example vacation dates (you can customize these). 
            List<DateTime> vacationDates = new List<DateTime> 
            { 
                new DateTime(2023, 10, 7), 
                new DateTime(2023, 10, 14), 
                new DateTime(2023, 10, 21) 
            }; 
 
            // Check if the selected date is a vacation date and display accordingly. 
            if (vacationDates.Contains(selectedDate)) 
            { 
                vacationDisplay.Text = "You are on vacation on this date!"; 
            } 
            else 
            { 
                vacationDisplay.Text = "No vacation on this date."; 
            } 
 
            // Calculate and display the difference between two dates (e.g., today and selected date). 
            TimeSpan difference = selectedDate - DateTime.Today; 
            dateDifferenceDisplay.Text = $"Days between today and selected date: {difference.Days} days"; 
        } `
    },
    {
        id: 5,
        title: "Ad rotator control",
        description: "Create a Web Form to demonstrate use of Ad rotator Control with five advertisements.",
        aspx: `<%@ Page Language="C#" AutoEventWireup="true" 
CodeBehind="AdRotatorDemo.aspx.cs" Inherits="YourNamespace.AdRotatorDemo" 
%> 
 
<!DOCTYPE html> 
<html> 
<head> 
    <title>Ad Rotator Demo</title> 
</head> 
<body> 
    <form id="form1" runat="server"> 
        <div> 
            <h2>Advertisement Rotator</h2> 
            <asp:AdRotator ID="adRotator" runat="server" AdvertisementFile="~/Ads.xml" AutoGenerateDataBindings="True" Target="_blank" /> 
        </div> 
    </form> 
</body> 
</html> `,
        csharp: `using System; 
 
namespace YourNamespace 
{ 
    public partial class AdRotatorDemo : System.Web.UI.Page 
    { 
        protected void Page_Load(object sender, EventArgs e) 
        { 
            if (!IsPostBack) 
            { 
                adRotator.AdvertisementFile = Server.MapPath("~/Ads.xml"); 
            } 
        } 
    } 
} `,
        xml: `<Advertisements> 
  <Ad> 
    <ImageUrl>ad1.jpg</ImageUrl> 
    <NavigateUrl>https://example.com/ad1</NavigateUrl> 
    <AlternateText>Advertisement 1</AlternateText> 
    <Impressions>100</Impressions> 
  </Ad> 
  <Ad> 
    <ImageUrl>ad2.jpg</ImageUrl> 
    <NavigateUrl>https://example.com/ad2</NavigateUrl> 
    <AlternateText>Advertisement 2</AlternateText> 
    <Impressions>200</Impressions> 
  </Ad> 
  <Ad> 
    <ImageUrl>ad3.jpg</ImageUrl> 
    <NavigateUrl>https://example.com/ad3</NavigateUrl> 
    <AlternateText>Advertisement 3</AlternateText> 
    <Impressions>150</Impressions> 
  </Ad> 
  <Ad> 
    <ImageUrl>ad4.jpg</ImageUrl> 
    <NavigateUrl>https://example.com/ad4</NavigateUrl> 
    <AlternateText>Advertisement 4</AlternateText> 
    <Impressions>180</Impressions> 
  </Ad> 
  <Ad> 
    <ImageUrl>ad5.jpg</ImageUrl> 
    <NavigateUrl>https://example.com/ad5</NavigateUrl> 
    <AlternateText>Advertisement 5</AlternateText> 
    <Impressions>120</Impressions> 
  </Ad> 
</Advertisements> `
    },
    {
        id: 6,
        title: "Master Page with Styles and Themes",
        description: "Create a web application to demonstrate use of Master Page with applying Styles and Themes for page beautification.",
        aspx: `<%@ Master Language="C#" AutoEventWireup="true" 
CodeBehind="Site.master.cs" Inherits="YourNamespace.SiteMaster" %> 
 
<!DOCTYPE html> 
<html> 
<head runat="server"> 
    <title>My Web App</title> 
    <link rel="stylesheet" type="text/css" 
href="App_Themes/MyTheme/StyleSheet.css" /> 
</head> 
<body> 
    <form id="form1" runat="server"> 
        <header> 
            <h1>My Web App</h1> 
            <nav> 
                <ul> 
                    <li><a href="Default.aspx">Home</a></li> 
                    <li><a href="About.aspx">About</a></li> 
                    <li><a href="Contact.aspx">Contact</a></li> 
                </ul> 
            </nav> 
        </header> 
        <main> 
            <asp:ContentPlaceHolder ID="MainContent" runat="server"> 
                <!-- Content from child pages goes here --> 
            </asp:ContentPlaceHolder> 
        </main> 
    </form> 
</body> 
</html>`,
css: `body { 
    font-family: Arial, sans-serif; 
    background-color: #f0f0f0; 
} 
 
header { 
    background-color: #333; 
    color: #fff; 
    text-align: center; 
    padding: 10px; 
} 
 
nav ul { 
    list-style: none; 
    padding: 0; 
} 
 
nav ul li { 
    display: inline; 
    margin-right: 20px; 
} 
 
a { 
    text-decoration: none; 
    color: #333; 
} `,
        csharp: ``
    },
    {
        id: 7,
        title: "Feedback form",
        description: "Create a feedback form with a list box and submit button, displaying a message upon submission.",
        aspx: `<%@ Page Language="C#" AutoEventWireup="true" 
CodeBehind="FeedbackForm.aspx.cs" Inherits="YourNamespace.FeedbackForm" 
%> 
 
<!DOCTYPE html> 
<html xmlns="http://www.w3.org/1999/xhtml"> 
<head runat="server"> 
    <title>Feedback Form</title> 
</head> 
<body> 
    <form id="form1" runat="server"> 
        <h2>Feedback Form</h2> 
        <div> 
            <p>Choose your preferred technology:</p> 
            <asp:ListBox ID="techListBox" runat="server"> 
                <asp:ListItem Text="ASP-XML" Value="ASP-XML" /> 
                <asp:ListItem Text="DotNET" Value="DotNET" /> 
                <asp:ListItem Text="JavaPro" Value="JavaPro" /> 
                <asp:ListItem Text="Unix" Value="Unix" /> 
                <asp:ListItem Text="C/C++" Value="C/C++" /> 
            </asp:ListBox> 
            <br /> 
            <p>Enter your feedback:</p> 
            <asp:TextBox ID="feedbackTextBox" runat="server" TextMode="MultiLine" Rows="4" Columns="50"></asp:TextBox> 
            <br /> 
            <asp:Button ID="submitButton" runat="server" Text="Submit Form" OnClick="submitButton_Click" /> 
            <br /> 
            <asp:Label ID="resultLabel" runat="server" Text=""></asp:Label> 
        </div> 
    </form> 
</body> 
</html>`,
        csharp: `using System; 
 
namespace YourNamespace 
{ 
    public partial class FeedbackForm : System.Web.UI.Page 
    { 
        protected void Page_Load(object sender, EventArgs e) 
        { 
 
        } 
 
        protected void submitButton_Click(object sender, EventArgs e) 
        { 
            // Get the selected technology option from the list box. 
            string selectedTechnology = techListBox.SelectedValue; 
 
            // Get the feedback entered by the user. 
            string feedback = feedbackTextBox.Text; 
 
            // Create a feedback message. 
            string message = "Thank you for your feedback!\n"; 
            message += "Selected Technology: " + selectedTechnology + "\n"; 
            message += "Feedback: " + feedback; 
 
            // Display the feedback message in the resultLabel. 
            resultLabel.Text = message; 
        } 
    } 
}`
    },
    {
        id: 8,
        title: "Calorie calculator",
        description: "Calculate total calories from fat, carbohydrate, and protein input, displaying results and maintaining a count of entries.",
        aspx: `<%@ Page Language="C#" AutoEventWireup="true" 
CodeBehind="FoodCalculator.aspx.cs" Inherits="YourNamespace.FoodCalculator" 
%> 
 
   <!DOCTYPE html> 
   <html xmlns="http://www.w3.org/1999/xhtml"> 
   <head runat="server"> 
       <title>Food Calorie Calculator</title> 
   </head> 
   <body> 
       <form id="foodForm" runat="server"> 
           <div> 
               <label for="fatTextBox">Grams of Fat:</label> 
               <asp:TextBox ID="fatTextBox" runat="server"></asp:TextBox> 
           </div> 
           <div> 
               <label for="carbTextBox">Grams of Carbohydrates:</label> 
               <asp:TextBox ID="carbTextBox" runat="server"></asp:TextBox> 
           </div> 
           <div> 
               <label for="proteinTextBox">Grams of Protein:</label> 
               <asp:TextBox ID="proteinTextBox" runat="server"></asp:TextBox> 
           </div> 
           <div> 
               <label>Total Calories:</label> 
               <asp:Label ID="totalCaloriesLabel" runat="server" Text="0" /> 
           </div> 
           <div> 
               <label>Accumulated Calories:</label> 
               <asp:Label ID="accumulatedCaloriesLabel" runat="server" Text="0" /> 
           </div> 
           <div> 
               <label>Item Count:</label> 
               <asp:Label ID="itemCountLabel" runat="server" Text="0" /> 
           </div> 
           <div> 
               <asp:Button ID="calculateButton" runat="server" Text="Calculate Calories" OnClick="CalculateTotalCalories_Click" /> 
           </div> 
       </form> 
   </body> 
   </html> `,
        csharp: ` using System; 
 
   namespace YourNamespace 
   { 
       public partial class FoodCalculator : System.Web.UI.Page 
       { 
           protected void CalculateTotalCalories_Click(object sender, EventArgs e) 
           { 
               if (IsValidInputs()) 
               { 
                   double fatGrams = Convert.ToDouble(fatTextBox.Text); 
                   double carbGrams = Convert.ToDouble(carbTextBox.Text); 
                   double proteinGrams = Convert.ToDouble(proteinTextBox.Text); 
 
                   // Calculate total calories 
                   double totalCalories = (fatGrams * 9) + ((carbGrams + proteinGrams) * 4); 
 
                   // Update the total calories label 
                   totalCaloriesLabel.Text = totalCalories.ToString("0.00"); 
 
                   // Update accumulated calories and item count 
                   double accumulatedCalories = Convert.ToDouble(accumulatedCaloriesLabel.Text); 
                   int itemCount = Convert.ToInt32(itemCountLabel.Text); 
 
                   accumulatedCalories += totalCalories; 
                   itemCount++; 
 
                   accumulatedCaloriesLabel.Text = accumulatedCalories.ToString("0.00"); 
                   itemCountLabel.Text = itemCount.ToString(); 
               } 
           } 
 
           private bool IsValidInputs() 
           { 
               // Validate input fields (e.g., check for empty or non-numeric input) 
               // Return true if inputs are valid; otherwise, return false. 
               if (string.IsNullOrWhiteSpace(fatTextBox.Text) || 
                   string.IsNullOrWhiteSpace(carbTextBox.Text) || 
                   string.IsNullOrWhiteSpace(proteinTextBox.Text)) 
               { 
                   return false; 
               } 
               return true; 
           } 
       } 
   }`
    },
    {
        id: 9,
        title: "User registration with validation",
        description: "Create an application that accepts and validates user information including name, password, age, email, and user ID.",
        aspx: ` <%@ Page Language="C#" AutoEventWireup="true" CodeBehind="UserRegistration.aspx.cs" Inherits="YourNamespace.UserRegistration" %> 
 
   <!DOCTYPE html> 
   <html xmlns="http://www.w3.org/1999/xhtml"> 
   <head runat="server"> 
       <title>User Registration</title> 
   </head> 
   <body> 
       <form id="userForm" runat="server"> 
           <div> 
               <label for="nameTextBox">Name:</label> 
               <asp:TextBox ID="nameTextBox" runat="server"></asp:TextBox> 
               <asp:RequiredFieldValidator ID="nameValidator" runat="server" ControlToValidate="nameTextBox" ErrorMessage="Name is required." Display="Dynamic" ForeColor="Red" /> 
           </div> 
           <div> 
               <label for="passwordTextBox">Password:</label> 
               <asp:TextBox ID="passwordTextBox" runat="server" TextMode="Password"></asp:TextBox> 
               <asp:RequiredFieldValidator ID="passwordValidator" runat="server" ControlToValidate="passwordTextBox" ErrorMessage="Password is required." Display="Dynamic" ForeColor="Red" /> 
           </div> 
           <div> 
               <label for="confirmPasswordTextBox">Confirm Password:</label> 
               <asp:TextBox ID="confirmPasswordTextBox" runat="server" TextMode="Password"></asp:TextBox> 
               <asp:CompareValidator ID="passwordMatchValidator" runat="server" ControlToValidate="confirmPasswordTextBox" ControlToCompare="passwordTextBox" ErrorMessage="Passwords must match." Display="Dynamic" ForeColor="Red" /> 
           </div> 
           <div> 
               <label for="ageTextBox">Age:</label> 
               <asp:TextBox ID="ageTextBox" runat="server"></asp:TextBox> 
               <asp:RangeValidator ID="ageValidator" runat="server" ControlToValidate="ageTextBox" Type="Integer" MinimumValue="21" MaximumValue="30" ErrorMessage="Age must be between 21 and 30." Display="Dynamic" ForeColor="Red" /> 
           </div> 
           <div> 
               <label for="emailTextBox">Email:</label> 
               <asp:TextBox ID="emailTextBox" runat="server"></asp:TextBox> 
               <asp:RegularExpressionValidator ID="emailValidator" runat="server" ControlToValidate="emailTextBox" ValidationExpression="^\w+([+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$" ErrorMessage="Invalid email address." Display="Dynamic" ForeColor="Red" /> 
               <asp:RequiredFieldValidator ID="emailRequiredValidator" runat="server" ControlToValidate="emailTextBox" ErrorMessage="Email is required." Display="Dynamic" ForeColor="Red" /> 
           </div> 
           <div> 
               <label for="userIdTextBox">User ID:</label> 
               <asp:TextBox ID="userIdTextBox" runat="server"></asp:TextBox> 
               <asp:RegularExpressionValidator ID="userIdValidator" runat="server" ControlToValidate="userIdTextBox" ValidationExpression="^(?=.*[AZ])(?=.*\d).{7,20}$" ErrorMessage="User ID must contain at least one capital letter, one digit, and be between 7 and 20 characters." Display="Dynamic" ForeColor="Red" /> 
               <asp:RequiredFieldValidator ID="userIdRequiredValidator" runat="server" ControlToValidate="userIdTextBox" ErrorMessage="User ID is required." Display="Dynamic" ForeColor="Red" /> 
           </div> 
           <div> 
               <asp:Button ID="registerButton" runat="server" Text="Register" OnClick="RegisterUser_Click" /> 
           </div> 
       </form> 
   </body> 
   </html>`,
        csharp: `  using System; 
 
   namespace YourNamespace 
   { 
       public partial class UserRegistration : System.Web.UI.Page 
       { 
           protected void RegisterUser_Click(object sender, EventArgs e) 
           { 
               if (IsValid) 
               { 
                   // Registration logic here 
                   // You can access user input using nameTextBox.Text, passwordTextBox.Text, etc. 
               } 
           } 
       } 
   } `
    },
    {
        id: 10,
        title: "Database operations with ASP.NET and ADO.NET",
        description: "Perform various database operations including displaying employee data, creating a login module, and CRUD operations on an employee table.",
        aspx: `   <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="false" DataKeyNames="EmpName"> 
       <Columns> 
           <asp:BoundField DataField="EmpName" HeaderText="Employee Name" /> 
           <asp:BoundField DataField="DeptId" HeaderText="Department ID" /> 
       </Columns> 
   </asp:GridView> 
   <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
       ConnectionString="<%$ ConnectionStrings:YourConnectionString %>" 
       SelectCommand="SELECT EmpName, DeptId FROM Employee"> 
   </asp:SqlDataSource>`,
        csharp: ``,
        Loginaspx:``,
        Loginaspxcs: `using System; 
   using System.Data.SqlClient; 
 
   public partial class Login : System.Web.UI.Page 
   { 
       protected void LoginButton_Click(object sender, EventArgs e) 
       { 
           string username = UsernameTextBox.Text; 
           string password = PasswordTextBox.Text; 
 
           // Check the username and password against the Users table in the database 
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
                       // Successful login 
                       Response.Redirect("EmployeeList.aspx"); 
                   } 
                   else 
                   { 
                       // Display an error message for unsuccessful login 
                   } 
               } 
           } 
       } 
   } `,
    EmployeeInsertaspx:``,
    EmployeeInsertaspxcs:`using System; 
   using System.Data.SqlClient; 
 
   public partial class EmployeeInsert : System.Web.UI.Page 
   { 
       protected void InsertEmployee_Click(object sender, EventArgs e) 
       { 
           int deptId = Convert.ToInt32(DeptIdTextBox.Text); 
           string deptName = DeptNameTextBox.Text; 
           string empName = EmpNameTextBox.Text; 
           decimal salary = Convert.ToDecimal(SalaryTextBox.Text); 
 
           // Insert employee data into the database 
           string connectionString = "YourConnectionString"; 
           using (SqlConnection connection = new SqlConnection(connectionString)) 
           { 
               connection.Open(); 
               string insertQuery = "INSERT INTO Employee (DeptId, DeptName, EmpName, Salary) VALUES (@DeptId, @DeptName, @EmpName, @Salary)"; 
               using (SqlCommand cmd = new SqlCommand(insertQuery, connection)) 
               { 
                   cmd.Parameters.AddWithValue("@DeptId", deptId); 
                   cmd.Parameters.AddWithValue("@DeptName", deptName); 
                   cmd.Parameters.AddWithValue("@EmpName", empName); 
                   cmd.Parameters.AddWithValue("@Salary", salary); 
                   cmd.ExecuteNonQuery(); 
               } 
           } 
 
           // You can add a success message or redirect the user to a different page. 
       } 
   } `,
    UpdateSalaryaspx:``,
    UpdateSalaryaspxcs:` using System; 
   using System.Data.SqlClient; 
 
   public partial class UpdateSalary : System.Web.UI.Page 
   { 
       protected void UpdateSalary_Click(object sender, EventArgs e) 
       { 
           string empName = EmpNameTextBox.Text; 
           decimal currentSalary = Convert.ToDecimal(CurrentSalaryTextBox.Text); 
           // Calculate the new salary 
           decimal newSalary = currentSalary * 1.15M; 
 
           // Update the employee's salary in the database 
           string connectionString = "YourConnectionString"; 
           using (SqlConnection connection = new SqlConnection(connectionString)) 
           { 
               connection.Open(); 
               string updateQuery = "UPDATE Employee SET Salary = @NewSalary WHERE EmpName = @EmpName"; 
               using (SqlCommand cmd = new SqlCommand(updateQuery, connection)) 
               { 
                   cmd.Parameters.AddWithValue("@NewSalary", newSalary); 
                   cmd.Parameters.AddWithValue("@EmpName", empName); 
                   cmd.ExecuteNonQuery(); 
               } 
           } 
 
           // You can add a success message or redirect the user to a different page. 
       } 
   } `,
    DeleteEmployeeaspx:``,
    DeleteEmployeeaspxcs:`using System; 
   using System.Data.SqlClient; 
 
   public partial class DeleteEmployee : System.Web.UI.Page 
   { 
       protected void DeleteEmployee_Click(object sender, EventArgs e) 
       { 
           string empName = EmpNameTextBox.Text; 
 
           // Delete the employee from the database 
           string connectionString = "YourConnectionString"; 
           using (SqlConnection connection = new SqlConnection(connectionString)) 
           { 
               connection.Open(); 
               string deleteQuery = "DELETE FROM Employee WHERE EmpName = @EmpName"; 
               using (SqlCommand cmd = new SqlCommand(deleteQuery, connection)) 
               { 
                   cmd.Parameters.AddWithValue("@EmpName", empName); 
                   cmd.ExecuteNonQuery(); 
               } 
           } 
 
           // You can add a success message or redirect the user to a different page. 
       } 
   } `,

    }
    // Add other programs here...
];

interface ProgramContentProps {
    id: string;
}

export default function ProgramContent({ id }: ProgramContentProps) {
    const [activeTab, setActiveTab] = useState<'aspx' | 'csharp' | 'webconfig' | 'sql'| 'xml' | 'css' | 'EmployeeListaspx' | 'EmployeeListaspxcs' | 'Loginaspx' | 'Loginaspxcs'| 'EmployeeInsertaspx' | 'EmployeeInsertaspxcs' | 'UpdateSalaryaspx'| 'UpdateSalaryaspxcs' | 'DeleteEmployeeaspx' | 'DeleteEmployeeaspxcs'>('aspx');
    const program = programs.find(p => p.id === parseInt(id));

    if (!program) {
        return (
            <>
                <Link href="/" className="text-blue-500 hover:text-blue-700 mb-4 inline-block">&larr; Back to Programs</Link>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Program not found</h1>
            </>
        );
    }

    return (
        <>
            <Link href="/" className="text-blue-500 hover:text-blue-700 mb-4 inline-block">&larr; Back to Programs</Link>
            <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                <div className="lg:w-1/3">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{program.id}. {program.title}</h1>
                    <p className="text-gray-600 mb-6">{program.description}</p>
                    <p className="text-gray-600 mb-6">{program.points}</p>
                </div>
                <div className="lg:w-2/3">
                    <div className="bg-white text-black shadow overflow-hidden rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold">Program Code:</h2>
                                <div className="flex space-x-2 overflow-scroll no-scrollbar" >
                                            {program.EmployeeListaspx && (
                                                <button
                                                    className={`px-3 py-1 rounded-md ${activeTab === 'EmployeeListaspx' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                                    onClick={() => setActiveTab('css')}
                                                >
                                                    EmployeeList.aspx
                                                </button>
                                            )}
                                            {program.EmployeeListaspxcs && (
                                                <button
                                                    className={`px-3 py-1 rounded-md ${activeTab === 'EmployeeListaspxcs' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                                    onClick={() => setActiveTab('css')}
                                                >
                                                    EmployeeList.aspx.cs
                                                </button>
                                            )}
                                            {program.Loginaspx && (
                                                <button
                                                    className={`px-3 py-1 rounded-md ${activeTab === 'Loginaspx' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                                    onClick={() => setActiveTab('css')}
                                                >
                                                    Login.aspx
                                                </button>
                                            )}
                                            {program.Loginaspxcs && (
                                                <button
                                                    className={`px-3 py-1 rounded-md ${activeTab === 'Loginaspxcs' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                                    onClick={() => setActiveTab('css')}
                                                >
                                                   Login.aspx.cs
                                                </button>
                                            )}
                                            {program.EmployeeInsertaspx && (
                                                <button
                                                    className={`px-3 py-1 rounded-md ${activeTab === 'EmployeeInsertaspx' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                                    onClick={() => setActiveTab('css')}
                                                >
                                                   EmployeeInsert.aspx
                                                </button>
                                            )}
                                            {program.EmployeeInsertaspxcs && (
                                                <button
                                                    className={`px-3 py-1 rounded-md ${activeTab === 'EmployeeInsertaspxcs' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                                    onClick={() => setActiveTab('css')}
                                                >
                                                   EmployeeInsert.aspx.cs
                                                </button>
                                            )}
                                            {program.UpdateSalaryaspx && (
                                                <button
                                                    className={`px-3 py-1 rounded-md ${activeTab === 'UpdateSalaryaspx' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                                    onClick={() => setActiveTab('css')}
                                                >
                                                   UpdateSalary.aspx
                                                </button>
                                            )}
                                            {program.UpdateSalaryaspxcs && (
                                                <button
                                                    className={`px-3 py-1 rounded-md ${activeTab === 'UpdateSalaryaspxcs' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                                    onClick={() => setActiveTab('css')}
                                                >
                                                   UpdateSalary.aspx.cs
                                                </button>
                                            )}
                                            {program.DeleteEmployeeaspx && (
                                                <button
                                                    className={`px-3 py-1 rounded-md ${activeTab === 'DeleteEmployeeaspx' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                                    onClick={() => setActiveTab('css')}
                                                >
                                                   DeleteEmployee.aspx
                                                </button>
                                            )}
                                            {program.DeleteEmployeeaspxcs && (
                                                <button
                                                    className={`px-3 py-1 rounded-md ${activeTab === 'DeleteEmployeeaspxcs' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                                    onClick={() => setActiveTab('css')}
                                                >
                                                   DeleteEmployee.aspx.cs
                                                </button>
                                            )}
                                    <button
                                        className={`px-3 py-1 rounded-md ${activeTab === 'aspx' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                        onClick={() => setActiveTab('aspx')}
                                    >
                                        ASPX
                                    </button>
                                    <button
                                        className={`px-3 py-1 rounded-md ${activeTab === 'csharp' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                        onClick={() => setActiveTab('csharp')}
                                    >
                                        C#
                                    </button>
                                    {program.css && (
                                        <button
                                            className={`px-3 py-1 rounded-md ${activeTab === 'css' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                            onClick={() => setActiveTab('css')}
                                        >
                                            CSS
                                        </button>
                                    )}
                                    {program.webconfig && (
                                        <button
                                            className={`px-3 py-1 rounded-md ${activeTab === 'webconfig' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                            onClick={() => setActiveTab('webconfig')}
                                        >
                                            Web.config
                                        </button>
                                    )}
                                    {program.sql && (
                                        <button
                                            className={`px-3 py-1 rounded-md ${activeTab === 'sql' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                            onClick={() => setActiveTab('sql')}
                                        >
                                            SQL
                                        </button>
                                    )}
                                    {program.xml && (
                                        <button
                                            className={`px-3 py-1 rounded-md ${activeTab === 'xml' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                            onClick={() => setActiveTab('xml')}
                                        >
                                            XML
                                        </button>
                                    )}
                                </div>
                            </div>
                            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                                <code>{program[activeTab]}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}