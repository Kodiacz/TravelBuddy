using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelBuddy.Domain.Abstraction
{
	public interface IDeletableEntity
	{
		public bool Deleted { get; set; }
	}
}
