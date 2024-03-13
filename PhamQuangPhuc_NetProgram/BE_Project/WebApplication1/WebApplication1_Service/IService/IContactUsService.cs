using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication1_DTO.Response;

namespace WebApplication1_Service.IService
{
    public interface IContactUsService
    {
      Task<bool> InsertContactUs();
        Task<ListContactUsResponse> GetListContactUs();  

    }
}
