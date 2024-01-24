using Microsoft.AspNetCore.Identity;
using TravelBuddy.Domain.Abstraction;

namespace TravelBuddy.Domain.Entities
{
	public class ApplicationUser : IdentityUser<Guid>, IDeletableEntity
	{
		public ApplicationUser()
		{
			this.CreatedTrips = new HashSet<Trip>();
			this.InvitedToTrips = new HashSet<Trip>();
		}

		public string FirstName { get; set; } = null!;

		public string LastName { get; set; } = null!;

		public string? ProfileImage { get; set; }

		public byte[]? PasswordSalt { get; set; }

		public ICollection<Trip> CreatedTrips { get; set; }

		/// <summary>
		/// All trips in which current user is invited
		/// </summary>
		public ICollection<Trip> InvitedToTrips { get; set; }

		/// <summary>
		/// The date on which the user was registered
		/// </summary>
		public DateTime Created { get; set; }

		public DateTime LastLoggedIn { get; set; }

		public bool Deleted { get; set; } = false;

		public DateTime? DateDeleted { get; set; }
	}
}
