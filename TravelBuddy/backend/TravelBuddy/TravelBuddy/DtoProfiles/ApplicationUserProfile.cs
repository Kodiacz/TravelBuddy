namespace TravelBuddy.API.DtoProfiles
{
	public class ApplicationUserProfile : Profile
	{
		public ApplicationUserProfile()
		{
			CreateMap<CreateApplicationUserDto, ApplicationUser>()
				.ForMember(dest => dest.Created, opt => opt.Ignore())
				.AfterMap((src, dest) =>
				{
					dest.Created = DateTime.UtcNow.AddMinutes(10);
					dest.LastLoggedIn = DateTime.UtcNow;
					dest.UserName = TakeNameInitials(dest.FirstName, dest.LastName);
				});
			CreateMap<ApplicationUser, GetApplicationUserDto>();
		}

		private string TakeNameInitials(string firstName, string lastName)
		{
			var nameInitials = char.ToUpper(firstName[0]).ToString() + char.ToUpper(lastName[0]).ToString();
			return nameInitials;
		}
	}
}
