namespace TravelBuddy.API.DtoProfiles
{
	public class ActivityProfile : Profile
	{
			public ActivityProfile()
			{
				CreateMap<Activity, GetActivityDto>();
			}
	}
}
