import { get } from './client';
import { ApiResponse } from '../../types/Api';
import { DietRecommendations, FoodRecommendation, FoodLimitation } from '../../types/Report';
import { mockReport } from './mockData';

// Get diet recommendations for a specific report
export const getDietRecommendations = async (reportId: string): Promise<ApiResponse<DietRecommendations>> => {
  if (process.env.NODE_ENV === 'development') {
    // Simulate API call with mock data
    await new Promise(resolve => setTimeout(resolve, 700));
    
    // Use diet recommendations from mock report
    return {
      success: true,
      data: mockReport.diet_recommendations,
      status: 200
    };
  }
  
  // Real API call for production
  return get<DietRecommendations>(`/diet/${reportId}`);
};

// Get foods to increase based on report findings
export const getFoodsToIncrease = async (reportId: string): Promise<ApiResponse<FoodRecommendation[]>> => {
  if (process.env.NODE_ENV === 'development') {
    // Simulate API call with mock data
    await new Promise(resolve => setTimeout(resolve, 600));
    
    return {
      success: true,
      data: mockReport.diet_recommendations.foods_to_increase,
      status: 200
    };
  }
  
  // Real API call for production
  return get<FoodRecommendation[]>(`/diet/${reportId}/increase`);
};

// Get foods to limit based on report findings
export const getFoodsToLimit = async (reportId: string): Promise<ApiResponse<FoodLimitation[]>> => {
  if (process.env.NODE_ENV === 'development') {
    // Simulate API call with mock data
    await new Promise(resolve => setTimeout(resolve, 600));
    
    return {
      success: true,
      data: mockReport.diet_recommendations.foods_to_limit,
      status: 200
    };
  }
  
  // Real API call for production
  return get<FoodLimitation[]>(`/diet/${reportId}/limit`);
};

// Get meal plan suggestions based on report findings
export const getMealPlanSuggestions = async (reportId: string): Promise<ApiResponse<{
  breakfast: string[];
  lunch: string[];
  dinner: string[];
  snacks: string[];
}>> => {
  if (process.env.NODE_ENV === 'development') {
    // Simulate API call with mock data
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Generate mock meal plan based on foods to increase
    const foodsToIncrease = mockReport.diet_recommendations.foods_to_increase.map(f => f.name);
    
    return {
      success: true,
      data: {
        breakfast: [
          "Oatmeal with berries and nuts",
          "Spinach and mushroom omelet with whole grain toast",
          "Greek yogurt with flaxseeds and fruit"
        ],
        lunch: [
          "Quinoa salad with leafy greens, chickpeas, and olive oil dressing",
          "Lentil soup with a side of mixed greens",
          "Grilled salmon with steamed vegetables"
        ],
        dinner: [
          "Baked fish with roasted vegetables and brown rice",
          "Bean and vegetable stir-fry with quinoa",
          "Grilled chicken with sweet potato and steamed broccoli"
        ],
        snacks: [
          "Handful of mixed nuts and seeds",
          "Apple slices with almond butter",
          "Carrot sticks with hummus",
          "Greek yogurt with berries"
        ]
      },
      status: 200
    };
  }
  
  // Real API call for production
  return get<{
    breakfast: string[];
    lunch: string[];
    dinner: string[];
    snacks: string[];
  }>(`/diet/${reportId}/meal-plan`);
};

// Get local dietitians based on user location
export const getLocalDietitians = async (
  zipCode: string,
  specialization?: string
): Promise<ApiResponse<Array<{
  id: string;
  name: string;
  title: string;
  specialization: string[];
  address: string;
  phone: string;
  email: string;
  acceptingNewPatients: boolean;
  telehealth: boolean;
  insuranceAccepted: string[];
  rating: number;
  distance: number;
}>>> => {
  if (process.env.NODE_ENV === 'development') {
    // Simulate API call with mock data
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock dietitians data
    const dietitians = [
      {
        id: "d-1",
        name: "Dr. Sarah Johnson",
        title: "Registered Dietitian, PhD",
        specialization: ["Diabetes Management", "Heart Health", "Weight Management"],
        address: "123 Health St, Wellness City, CA 90210",
        phone: "(555) 123-4567",
        email: "sarah.johnson@example.com",
        acceptingNewPatients: true,
        telehealth: true,
        insuranceAccepted: ["Aetna", "Blue Cross", "Cigna", "Medicare"],
        rating: 4.8,
        distance: 2.3
      },
      {
        id: "d-2",
        name: "Michael Chen, RD",
        title: "Registered Dietitian",
        specialization: ["Sports Nutrition", "Metabolic Health", "Plant-based Diets"],
        address: "456 Nutrition Ave, Wellness City, CA 90210",
        phone: "(555) 234-5678",
        email: "michael.chen@example.com",
        acceptingNewPatients: true,
        telehealth: true,
        insuranceAccepted: ["Blue Cross", "United Healthcare", "Kaiser"],
        rating: 4.6,
        distance: 3.5
      },
      {
        id: "d-3",
        name: "Emily Rodriguez, MS, RD",
        title: "Registered Dietitian",
        specialization: ["Digestive Health", "Food Allergies", "Prenatal Nutrition"],
        address: "789 Wellness Blvd, Wellness City, CA 90210",
        phone: "(555) 345-6789",
        email: "emily.rodriguez@example.com",
        acceptingNewPatients: false,
        telehealth: true,
        insuranceAccepted: ["Aetna", "Cigna", "Humana"],
        rating: 4.9,
        distance: 5.1
      }
    ];
    
    // Filter by specialization if provided
    let filteredDietitians = dietitians;
    if (specialization) {
      filteredDietitians = dietitians.filter(d => 
        d.specialization.some(s => 
          s.toLowerCase().includes(specialization.toLowerCase())
        )
      );
    }
    
    return {
      success: true,
      data: filteredDietitians,
      status: 200
    };
  }
  
  // Real API call for production
  return get<Array<{
    id: string;
    name: string;
    title: string;
    specialization: string[];
    address: string;
    phone: string;
    email: string;
    acceptingNewPatients: boolean;
    telehealth: boolean;
    insuranceAccepted: string[];
    rating: number;
    distance: number;
  }>>('/diet/dietitians', { zipCode, specialization });
};
