using IdentityApp.Data;
using IdentityApp.Models;
using IdentityAppRepositories.UnitOfWork;
using IdentityAppServices.IServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;


namespace IdentityAppServices.Services
{
    public class ContactsServices :IContactsServices
    {
        private readonly ApplicationDbContext _context;
        private UnitOfWork _unitOfWork;
        public  ContactsServices(ApplicationDbContext context) {
            _unitOfWork = new UnitOfWork(context);
        }

        public  void Delete(Contact entityToDelete)
        {
               _unitOfWork.ContactRepository.Delete(entityToDelete);
        }

        public void Delete(object id)
        {
            _unitOfWork.ContactRepository.Delete(id);
        }

        public IQueryable<Contact> Get()
        {
            return  _unitOfWork.ContactRepository.Get();
        }

        public Contact GetByID(object id)
        {
            return _unitOfWork.ContactRepository.GetByID(id);
        
        }

        public  void Insert(Contact entity)
        {
              _unitOfWork.ContactRepository.Insert(entity);
        }

        public void Update(Contact entityToUpdate)
        {
               _unitOfWork.ContactRepository.Update(entityToUpdate);
        }

        
    }
}
