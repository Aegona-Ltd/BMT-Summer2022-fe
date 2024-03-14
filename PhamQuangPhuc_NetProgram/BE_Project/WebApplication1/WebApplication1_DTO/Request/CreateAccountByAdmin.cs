using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication1_DTO.Request
{
    public class CreateAccountByAdmin
    {

        public string Email { get; set; }=string.Empty;

        public string UserName { get; set; } = string.Empty;


        public string Password { get; set; } = "123456";

        public string Phone { get; set; } = string.Empty;

   
        public string Role { get; set; } = "User";

    }
}
