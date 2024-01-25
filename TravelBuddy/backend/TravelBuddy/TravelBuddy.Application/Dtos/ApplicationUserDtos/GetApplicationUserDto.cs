namespace TravelBuddy.Application.Dtos.ApplicationUserDto
{
	public class GetApplicationUserDto
	{
        public GetApplicationUserDto()
        {
			this.CreatedTrips = new HashSet<Trip>();  
			this.InvitedToTrips = new HashSet<Trip>();  
			this.Id = new Guid();  
        }

		public Guid Id { get; set; } 

		public string FirstName { get; set; } = null!;

		public string LastName { get; set; } = null!;

		public string Email { get; set; } = null!;

		public string UserName { get; set; } = null!;

		public string? ProfileImage { get; set; } 

		public ICollection<Trip> CreatedTrips { get; set; }

		public ICollection<Trip> InvitedToTrips { get; set; }

		public DateTime Created { get; set; }

		public DateTime LastLoggedIn { get; set; }
	}
}
