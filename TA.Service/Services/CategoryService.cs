using System.Collections.Generic;
using TA.Data;
using TA.Data.Html5Models;
using TA.Data.Interfaces;
using System.Linq;

namespace TA.Service.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly IUnitOfWork _unitOfWork;

        public CategoryService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public IList<Category> GetCategories()
        {
            var repo = _unitOfWork.GetRepository<Category>();
            var categories = repo.GetList();
            return categories;
        }

        public IEnumerable<Z_Store> GetzStore()
        {
            var repo = _unitOfWork.GetRepository<Z_Store>();
            var zStore = repo.GetList().Take(10).ToList();
            return zStore;
        }
    }
}
