using Microsoft.AspNetCore.Identity;

namespace TravelBuddy.Infrastructure
{
	public class ApplicationUser : IdentityUser, IUser
	{
		public ApplicationUser()
		{
			this.CreatedTrips = new HashSet<Trip>();
			this.InvitedToTrips = new HashSet<Trip>();
		}

		public string? ProfileImage { get; set; }

		public byte[]? PasswordSalt { get; set; }

		public ICollection<Trip> CreatedTrips { get; set; }

		public ICollection<Trip> InvitedToTrips { get; set; }

		public DateTime Created { get; set; }

		public DateTime LastLoggedIn { get; set; }
	}
}
