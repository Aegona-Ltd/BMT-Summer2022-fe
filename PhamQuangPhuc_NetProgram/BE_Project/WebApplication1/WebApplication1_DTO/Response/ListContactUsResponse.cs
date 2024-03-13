using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication1_DTO.Request;

namespace WebApplication1_DTO.Response
{
    public class ListContactUsResponse :APaging
    {
        public List<ContactUsRequest> listContactUsRequests { get; set; }= new List<ContactUsRequest>();
    }
}
