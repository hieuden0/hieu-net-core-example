using System;

namespace TA.Data.Html5Models
{
    public partial class Z_Store
    {
        public Guid ID { get; set; }
        public String Name { get; set; }
        public String Email { get; set; }

        public String Website { get; set; }
        public double PriceMultiplier { get; set; }
        public bool AccountEnabled { get; set; }
        public DateTime DateCreated { get; set; }

        public bool IsPreferred { get; set; }
        public String Address1 { get; set; }
        public String Address2 { get; set; }
        public Guid City_ID { get; set; }

        public String PostalCode { get; set; }
        public String Phone { get; set; }
        public String Fax { get; set; }
        public DateTime DateModified { get; set; }

    }
}
