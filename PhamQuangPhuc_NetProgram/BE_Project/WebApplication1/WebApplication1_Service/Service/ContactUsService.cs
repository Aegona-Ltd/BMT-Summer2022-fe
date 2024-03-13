using Database;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using WebApplication1_DTO.Request;
using WebApplication1_DTO.Response;
using WebApplication1_Entity.Entity;
using WebApplication1_Repository.UnitOfWork;
using WebApplication1_Service.IService;

namespace WebApplication1_Service.Service
{
    public class ContactUsService : IContactUsService
    {
        private UnitOfWork unitOfWork = new UnitOfWork();

      
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public async Task<ListContactUsResponse> GetListContactUs()
        {
            ListContactUsResponse response = new ListContactUsResponse();
            Expression<Func<ContactUs, bool>> filterExpression = u => string.IsNullOrEmpty(null) && u.IsActive==true;
            var contactUsList =  unitOfWork.ContactUsRepository.GetAll(filterExpression);
            response.NumberCount = contactUsList.Count();
            response.listContactUsRequests = contactUsList.Select(
                contactUs => new ContactUsRequest {
                        id=contactUs.Id,
                        BusinessPhone = contactUs.BusinessPhone,
                        CompanyName = (contactUs.CompanyName==null? string.Empty: contactUs.CompanyName),
                        Email= (contactUs.Email == null ? string.Empty : contactUs.Email),
                        FullName=(contactUs.FullName == null ? string.Empty : contactUs.FullName),
                        Phone= (contactUs.Phone == null ? string.Empty : contactUs.Phone),

                }).ToList ();
            return response;
        }

        public async Task<bool> InsertContactUs(ContactUsRequest request, Guid userId)
        {
            try
            {
                ContactUs contactUs = new ContactUs()
                {
                    BusinessPhone = request.BusinessPhone,
                    CompanyName = request.CompanyName,
                    Email = request.Email,
                    FullName = request.FullName,
                    Phone = request.Phone,
                    Message = request.Message,
                    CreatedBy = userId.ToString(),
                    CreatedDate = DateTime.Now,
                    IsActive = true,
                };
                await unitOfWork.ContactUsRepository.Insert(contactUs);
                return true;
            }catch (Exception ex) {

                throw new Exception(ex.Message);
            }
            
        }
    }
}
