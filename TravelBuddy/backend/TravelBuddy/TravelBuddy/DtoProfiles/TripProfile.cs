namespace TravelBuddy.API.DtoProfiles
{
	public class TripProfile : Profile
	{
		public TripProfile()
		{
			CreateMap<Trip, GetTripDto>()
				.ForMember(destinationMember => destinationMember.Creator, opt => opt.MapFrom(src => src.Creator.Email));

			CreateMap<AddTripDto, Trip>();
		}

	}
}
