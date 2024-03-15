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
    public class CompaniesServices :ICompaniesServices
    {
        private readonly ApplicationDbContext _context;
        private UnitOfWork _unitOfWork;
        public CompaniesServices(ApplicationDbContext context) {
            _unitOfWork = new UnitOfWork(context);
        }

        public  void Delete(Company entityToDelete)
        {
               _unitOfWork.CompanyRepository.Delete(entityToDelete);
        }

        public void Delete(object id)
        {
            _unitOfWork.CompanyRepository.Delete(id);
        }

        public IQueryable<Company> Get()
        {
            return  _unitOfWork.CompanyRepository.Get();
        }

        public Company GetByID(object id)
        {
            return _unitOfWork.CompanyRepository.GetByID(id);
        
        }

        public  void Insert(Company entity)
        {
              _unitOfWork.CompanyRepository.Insert(entity);
        }

        public void Update(Company entityToUpdate)
        {
               _unitOfWork.CompanyRepository.Update(entityToUpdate);
        }

        
    }
}
