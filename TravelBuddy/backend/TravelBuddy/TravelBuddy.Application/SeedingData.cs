using System.Runtime.CompilerServices;
using System.Text.RegularExpressions;

namespace TravelBuddy.Application
{
	public static class Seeding
	{
		#region Default Data

		private static User[] users => new User[]
		{
			new("Simeon", "Yordanov", "Simeon.Yordanov@gmail.com", "1234"),
			new("Doroteya", "Yankova", "Doroteya.Yankova@gmail.com", "1234"),
			new("Dexter", "Bexter", "Dexter.Bexter@gmail.com", "1234"),
		};

		private static Dictionary<string, Trip[]> trips => new()
		{
			{
				users[0].FirstName,
				new Trip[]
				{
					new()
					{
						Name = "Climbing trip",
						StartDate = GetDate(Month.August, 4),
						EndDate = GetDate(Month.August, 4).AddDays(5),
						Image = "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/be/38/ff.jpg",
						Accommodation = "https://www.booking.com/hotel/ca/marblewood-village-resort.en-gb.html?aid=377399&label=marble-mountain-8witGOBs3O7qRq0azg51AwS540974719335%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-81118979856%3Alp9222567%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YX-SVbABBf1_4WBEGJjkaYE&sid=7a86042fcd09dec84394c27d7d4e07e7&dest_id=-574135;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1731328412;srpvid=b49158466d290486;type=total;ucfs=1&",
						TravellingBy = "Wizz",
					},
					new()
					{
						Name = "Snowboard dolomites",
						StartDate = GetDate(Month.January),
						EndDate = GetDate(Month.January).AddDays(10),
						Image = "https://www.skidolomites.it/images/background/homepage/maestro_snowboard_altabadia_dolomites_lavilla_sancassiano.jpg",
						Accommodation = "https://www.booking.com/hotel/it/masl.en-gb.html?aid=376619&label=dolomites-wGcl%2A%2ASgGJ_MKPP8HOXCTwS630412222926%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-303688413974%3Alp9222567%3Ali%3Adec%3Adm&sid=793e265cb2af7b4f8bed76f0791d317c",
						TravellingBy = "By car",
					},
				}
			},
			{
				users[1].FirstName,
				new Trip[]
				{
					new()
					{
						Name = "Bali",
						StartDate = GetDate(Month.September, 5),
						EndDate = GetDate(Month.September, 5).AddDays(21),
						Image = "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/be/38/ff.jpg",
						Accommodation = "https://www.airbnb.com/rooms/989020487048284489?category_tag=Tag%3A8661&search_mode=flex_destinations_search&check_in=2024-12-02&check_out=2024-12-07&source_impression_id=p3_1731328520_P3Izz8bscaAhE3sy&previous_page_section_name=1000&federated_search_id=a7259781-3360-42c1-bba5-05e2a380ea55",
						TravellingBy = "Wizz",
					},
					new()
					{
						Name = "Peru",
						StartDate = GetDate(Month.June),
						EndDate = GetDate(Month.June).AddDays(30),
						Image = "https://karta-holiday.com/wp-content/uploads/2021/11/Peru-zaglavna.jpg",
						Accommodation = "https://www.airbnb.com/rooms/1211722451538826881?adults=2&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=regular_search&check_in=2024-11-20&check_out=2024-11-25&source_impression_id=p3_1731329240_P3Zs_SDnO9EN5ovd&previous_page_section_name=1000&federated_search_id=99327e9d-7f06-4ee9-9671-8f2445bd4cf6",
						TravellingBy = "TurkishAirline",
					},
				}
			},
			{
				users[2].FirstName,
				new Trip[]
				{
					new()
					{
						Name = "Hotelche",
						StartDate = GetDate(Month.January),
						EndDate = GetDate(Month.January).AddDays(11),
						Image = "https://scontent.fsof10-1.fna.fbcdn.net/v/t39.30808-6/278842133_5400710216607244_1880950920733171568_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tzEUMia0HXEQ7kNvgHGAAFO&_nc_zt=23&_nc_ht=scontent.fsof10-1.fna&_nc_gid=AtAOq_xw2G0o7iiVVIGsCbk&oh=00_AYCHl4sSo5uhdlDDLdx3M8QVjNvNKgZkhThi4o7l4CJC6Q&oe=6737DE23",
						Accommodation = "https://grijovnici.com/",
						TravellingBy = "Car",
					},
					new()
					{
						Name = "Krapec",
						StartDate = GetDate(Month.July),
						EndDate = GetDate(Month.July).AddDays(10),
						Image = "https://beaches.bg/wp-content/uploads/2015/06/krapets-beach-13.jpg",
						Accommodation = "https://www.booking.com/hotel/bg/guesthouse-mirage.bg.html?aid=356980&label=gog235jc-1FCAMoF0IHa3JhcGV0c0gDWANoF4gBAZgBA7gBF8gBDNgBAegBAfgBAogCAagCA7gC_P7HuQbAAgHSAiRkODA4ZTE2Yy1hNTIwLTQ2MTMtYmNkMi0zOWM5YWZlMzg5YTfYAgXgAgE&sid=793e265cb2af7b4f8bed76f0791d317c&all_sr_blocks=181572905_128002799_3_0_0%2C181572904_128002799_3_0_0%2C181572901_128002799_2_0_0%2C181572901_128002799_2_0_0%2C181572901_128002799_1_0_0%2C181572901_128002799_1_0_0;checkin=2025-01-18;checkout=2025-01-25;dest_id=-835491;dest_type=city;dist=0;group_adults=12;group_children=0;hapos=4;highlighted_blocks=181572905_128002799_3_0_0%2C181572904_128002799_3_0_0%2C181572901_128002799_2_0_0%2C181572901_128002799_2_0_0%2C181572901_128002799_1_0_0%2C181572901_128002799_1_0_0;hpos=4;matching_block_id=181572905_128002799_3_0_0;no_rooms=6;req_adults=12;req_children=0;room1=A%2CA;room2=A%2CA;room3=A%2CA;room4=A%2CA;room5=A%2CA;room6=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=181572905_128002799_3_0_0__56000%2C181572904_128002799_3_0_0__56000%2C181572901_128002799_2_0_0__49000%2C181572901_128002799_2_0_0__49000%2C181572901_128002799_1_0_0__46550%2C181572901_128002799_1_0_0__46550;srepoch=1731329946;srpvid=6c455b43e7d10236;type=total;ucfs=1&",
						TravellingBy = "Car",
					},
				}
			},
		};

		private static Dictionary<string, Itinerary[]> itineraries => new()
		{
			{
				GetTripName(0, 0),
				new Itinerary[]
				{
					new()
					{
						Name = "Climb",
						Activities = new Activity[]
						{
							new()
							{
								Name = "climb 5a rotues",
							},
							new()
							{
								Name = "climb 4c rotues",
							},
							new()
							{
								Name = "try 6a routes",
							},
						}
					},
					new()
					{
						Name = "Break and sighting",
						Activities = new Activity[]
						{
							new()
							{
								Name = "explore the city",
							},
							new()
							{
								Name = "relax",
							},
							new()
							{
								Name = "explore routes for the next day",
							},
						}
					},
					new()
					{
						Name = "Train",
						Activities = new Activity[]
						{
							new()
							{
								Name = "pull ups",
							},
							new()
							{
								Name = "finger board",
							},
							new()
							{
								Name = "pinch holding",
							},
						}
					},
					new()
					{
						Name = "Climb",
						Activities = new Activity[]
						{
							new()
							{
								Name = "warm up",
							},
							new()
							{
								Name = "warm up with 4a",
							},
							new()
							{
								Name = "try 5c",
							},
							new()
							{
								Name = "try 6a+",
							},
						}
					},
				}
			},
			{
				GetTripName(0, 1),
				new Itinerary[]
				{
					new()
					{
						Name = "Powder day",
						Activities = new Activity[]
						{
							new()
							{
								Name = "destroy the powder",
							},
							new()
							{
								Name = "drink beer",
							},
							new()
							{
								Name = "drink rakia to get warm",
							},
							new()
							{
								Name = "eat",
							},
						}
					},
					new()
					{
						Name = "Learn new tricks",
						Activities = new Activity[]
						{
							new()
							{
								Name = "learn to jump",
							},
							new()
							{
								Name = "try switch",
							},
						}
					}
				}
			},
			{
				GetTripName(1, 0),
				new Itinerary[]
				{
					new()
					{
						Name = "Sightings",
						Activities = new Activity[]
						{
							new()
							{
								 Name = "see temples"
							},
							new()
							{
								 Name = "check the beach"
							},
							new()
							{
								 Name = "shoot with the drone"
							},
						},
					},
					new()
					{
						Name = "Snorcheling",
						Activities = new Activity[]
						{
							new()
							{
								Name = "manta ray",
							},
							new()
							{
								Name = "star fish",
							},
							new()
							{
								Name = "coral",
							},
						}

					}
				}
			},
			{
				GetTripName(1, 1),
				new Itinerary[]
				{
					new()
					{
						Name = "Sightings",
					},
					new()
					{
						Name = "Snorcheling",
					}
				}
			},
			{
				GetTripName(2, 0),
				new Itinerary[]
				{
					new()
					{
						Name = "First day",
						Activities = new Activity[]
						{
							new()
							{
								Name = "eat breakfast"
							},
							new()
							{
								Name = "play"
							},
							new()
							{
								Name = "eat lunch"
							},
							new()
							{
								Name = "nap"
							},
							new()
							{
								Name = "eat dinner"
							},
							new()
							{
								Name = "go to sleep"
							},
						}
					},
					new()
					{
						Name = "Second day",
						Activities = new Activity[]
						{
							new()
							{
								Name = "eat breakfast"
							},
							new()
							{
								Name = "play"
							},
							new()
							{
								Name = "eat lunch"
							},
							new()
							{
								Name = "nap"
							},
							new()
							{
								Name = "eat dinner"
							},
							new()
							{
								Name = "go to sleep"
							},
						}
					},
				}
			},
		};

		private static string GetTripName(int userIndex, int tripIndex)
		=> trips[users[userIndex].FirstName][tripIndex].Name;

		#endregion

		public static IEnumerable<ApplicationUser> Users => GetApplicationUsers(users);

		private static IEnumerable<ApplicationUser> GetApplicationUsers(User[] users)
		{
			List<ApplicationUser> values = new List<ApplicationUser>();

			foreach (var item in users)
			{
				ApplicationUser appUser = new()
				{
					Id = Guid.NewGuid(),
					UserName = item.Username,
					FirstName = item.FirstName,
					LastName = item.LastName,
					Email = item.Email,
					PasswordHash = Convert.ToBase64String(item.PasswordHash),
					PasswordSalt = item.PasswordSalt,
					Created = DateTime.UtcNow.AddHours(1),
					CreatedTrips = GetApplicationUserTrips(item.FirstName, trips)
				};

				values.Add(appUser);
			}

			return values;
		}

		private static ICollection<Trip> GetApplicationUserTrips(string firstName, Dictionary<string, Trip[]> trips)
		{
			foreach (var trip in trips[firstName])
			{
				trip.Itineraries = GetItineraries(trip.Name);
			}

			return trips[firstName];
		}

		private static ICollection<Itinerary> GetItineraries(string tripName)
		{
			itineraries.TryGetValue(tripName, out Itinerary[] values);

			return values;
		}

		private static DateTime GetDate(Month month, int day = 1)
		{
			var currentDate = DateTime.Now;
			var desiredDate = new DateTime(currentDate.Year, (int)month, day);

			if (currentDate > desiredDate)
			{
				return desiredDate.AddYears(1);
			}

			return desiredDate;
		}
	}

	public class User
	{
		public User(string FirstName, string LastName, string Email, string Password)
		{
			this.FirstName = FirstName;
			this.LastName = LastName;
			this.Email = Email;
			this.Password = Password;
			GeneratePasswordHash();
		}

		public string FirstName { get; }

		public string LastName { get; }

		public string Username => $"{FirstName.First()}{LastName.First()}";

		public string Email { get; }

		public string Password { get; }

		public byte[] PasswordHash { get; private set; }

		public byte[] PasswordSalt { get; private set; }

		private void GeneratePasswordHash()
		{
			Helpers.Encrypt.Password.CreateHash(Password, out byte[] passwordHash, out byte[] PasswordSalt);

			this.PasswordHash = passwordHash;
			this.PasswordSalt = PasswordSalt;
		}
	}

	public enum Month
	{
		January = 1,
		February,
		March,
		April,
		May,
		June,
		July,
		August,
		September,
		October,
		November,
		December
	}
}
