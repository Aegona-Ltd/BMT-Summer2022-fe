using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApplication1.Models
{
    [BindProperties]
    public class ContactModel
    {

        //Tuy nhiên, để sử dụng asp-for và asp-validation-for, 
        //    bạn cần chắc chắn rằng bạn đã bao gồm thư viện jquery.validate.unobtrusive.min.js để 
        //        hỗ trợ việc validation bằng JavaScript.


            [Required]
            [DataType(DataType.Text)]
            public string? FullName { get; set; }

            [Required]
            [DataType(DataType.PhoneNumber)]
            public string BusinessPhone { get; set; } = string.Empty;

            [Required]
            public string? CompanyName { get; set; }

            [Required]
            [EmailAddress]
            public string? Email { get; set; }

            [Required]
            [StringLength(8, ErrorMessage = "Name length can't be more than 8.")]
            public string Message { get; set; } = string.Empty;

            //[Required]
            // public string Captcha { get; set; } = string.Empty;

   
    }
}
