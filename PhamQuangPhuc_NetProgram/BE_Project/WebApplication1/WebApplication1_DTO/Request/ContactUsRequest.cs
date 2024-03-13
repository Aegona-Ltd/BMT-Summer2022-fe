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
        public string FullName { get; set; } = string.Empty;
        public string BusinessPhone { get; set; } = string.Empty;
        public string CompanyName { get; set; } = string.Empty;
        public string Phone { get; set; }= string.Empty;
        public string Email { get; set; } = string.Empty;   
        public string Message { get; set; } = string.Empty;
    }
}
