using IdentityApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace IdentityAppRepositories.IRepositories
{
    public interface IRepositories<TEntity> where TEntity : class
    {
    TEntity GetByID(object id);
    IEnumerable<TEntity> Get(
    Expression<Func<TEntity, bool>> filter,
    Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy,
    string includeProperties);
    void Insert(TEntity entity);
    void Delete(object id);
    void Delete(TEntity entityToDelete);
    void Update(TEntity entityToUpdate);
}
}
