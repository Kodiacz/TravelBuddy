global using System.Net;
global using System.ComponentModel.DataAnnotations.Schema;
global using System.Linq.Expressions;
global using System.Runtime.Serialization;
global using System.ComponentModel;
global using System.ComponentModel.DataAnnotations;
global using System.Text.Json.Serialization;

global using Microsoft.Extensions.Configuration;
global using Microsoft.AspNetCore.JsonPatch;
global using Microsoft.AspNetCore.JsonPatch.Operations;

global using AutoMapper;

global using TravelBuddy.Domain.Models;
global using TravelBuddy.Domain.Entities;
global using TravelBuddy.Application.Models;
global using TravelBuddy.Application.CustomAttributes;
global using TravelBuddy.Application.Queries.Itineraries;
global using TravelBuddy.Application.Dtos.TripDtos;
global using TravelBuddy.Application.Dtos.ActivityDtos;
global using TravelBuddy.Application.Dtos.ItineraryDtos;
global using TravelBuddy.Application.Dtos.ApplicationUserDto;
global using TravelBuddy.Application.Interfaces.Repository;