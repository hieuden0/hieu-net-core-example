using System;
using System.Collections.Generic;
using TA.Data.Html5Models;

namespace TA.Data
{
    public partial class Item2dfeature
    {
        public Guid ItemId { get; set; }
        public Guid _2dfeatureId { get; set; }

        public Item Item { get; set; }
        public _2dfeature _2dfeature { get; set; }
    }
}
