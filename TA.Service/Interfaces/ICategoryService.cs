using System.Collections.Generic;
using TA.Data;
using TA.Data.Html5Models;
using TA.Data.Interfaces;

namespace TA.Service
{
    public interface ICategoryService
    {
        IList<Category> GetCategories();

        IEnumerable<Z_Store> GetzStore();
    }
}
