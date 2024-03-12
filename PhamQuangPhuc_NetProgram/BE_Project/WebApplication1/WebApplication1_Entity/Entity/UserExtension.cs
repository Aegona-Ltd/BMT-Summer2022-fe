using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication1_Entity.Entity
{
    public class UserExtension : IdentityUser
    {
        public UserDetail? UserDetail { get; set; }
    }
}
