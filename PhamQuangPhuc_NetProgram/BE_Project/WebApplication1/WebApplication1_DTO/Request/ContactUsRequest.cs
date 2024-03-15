using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication1_DTO.Request
{
   
    public class ContactUsRequest
    {

        public Guid id { get; set; }

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
        [MinLength(5, ErrorMessage = "Message must be at least 5 characters long.")]
        public string Message { get; set; } = string.Empty;

        [Required]
        [MinLength(20, ErrorMessage = "Captcha must be at least 20 characters long.")]
        public string? Captcha { get; set; }
    }
}
