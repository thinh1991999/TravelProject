export interface RoomDetail {
  _id:string;
  name: string;
  description: string;
  pricePerNight: number;
  guests: number;
  bedrooms: number;
  livingRooms: number;
  beds: number;
  baths: number;
  location: {
    type: string;
    address: string;
    coordinates: number[];
  };
  bookings: {
    _id: string;
    checkIn: string;
    checkOut: string;
  }[];
  reviews: any[];
  address: string;
  propertyType: string;
  amenities: string[];
  categories: string[];
  images: {
    publicUrl: string;
    hint: string;
  }[];
  owner: {
    email: string;
    firstName: string;
    lastName: string;
    profilePic: string;
  };
};

export interface WelcomeCancellationPolicy {
  __typename: string;
  cancellationPolicyId: number;
  linkText: string;
  milestones: any[];
  cancellationOverrideRules: null;
  subtitle: string;
  subtitles: string[];
  title: string;
  localizedCancellationPolicyName: string;
  cancellationPolicyPriceType: null;
  cancellationPolicyPriceFactor: number;
  highlightedCancellationTip: null;
}

export interface Detail {
  title: string;
  subtitle?: string;
  priceDisclaimer?: string;
  reviewRating?: null;
  reviewCount?: null;
  reviewAccessibilityLabel?: null;
  drawerCalendarLoggingEventData?: DrawerCalendarLoggingEventData;
  descriptionItems?: DescriptionItem[];
  amenities?: DetailAmenity[];
  lat?: number;
  lng?: number;
  locationDisclaimer?: null;
  locationDetails?: any[];
  additionalHosts?: null;
  additionalHostsTitle?: null;
  disclaimerItems?: null;
  hostAvatar?: HostAvatar;
  hostBasicInfos?: SeeAllHouseRulesButton[];
  hostFeatures?: SeeAllHouseRulesButton[];
  hostImage?: null;
  hostInfos?: any[];
  hostProfileDescription?: HostProfileDescription;
  hostTags?: HostTag[];
  hostFirstName?: null;
  experienceId?: string;
  additionalHouseRules?: string;
  additionalHouseRulesTitle?: string;
  cancellationPolicyForDisplay?: null;
  cancellationPolicies?: DetailCancellationPolicy[];
  cancellationPolicyTitle?: string;
  discountData?: null;
  houseRules?: SeeAllHouseRulesButton[];
  houseRulesTitle?: string;
  listingExpectations?: any[];
  listingExpectationsTitle?: null;
  reportButton?: null;
  seeAllHouseRulesButton?: SeeAllHouseRulesButton;
  seeCancellationPolicyButton?: SeeAllHouseRulesButton;
  safetyAndPropertyTitle?: string;
  previewSafetyAndProperties?: PreviewSafetyAndProperty[];
  seeAllSafetyAndPropertyButton?: SeeAllHouseRulesButton;
  safetyExpectationsAndAmenities?: PreviewSafetyAndProperty[];
}

export interface DetailAmenity {
  title: string;
  amenities: AmenityAmenity[];
}

export interface AmenityAmenity {
  title: string;
  subtitle: string;
  available: boolean;
  image: null;
  images: null;
}

export interface DetailCancellationPolicy {
  __typename: string;
  id: number;
  milestones: any[];
  cancellationMilestoneModal: CancellationMilestoneModal;
  seeDetailsLink: SeeAllHouseRulesButton;
  subtitle: string;
  subtitles: string[];
  title: string;
  localizedCancellationPolicyName: string;
  cancellationPolicyPriceType: null;
  cancellationPolicyPriceFactor: number;
}

export interface CancellationMilestoneModal {
  __typename: string;
  title: null;
  subtitles: null;
  header: null;
  entries: null;
  actionLinkText: null;
  actionLinkUrl: null;
}

export interface SeeAllHouseRulesButton {
  __typename: SeeAllHouseRulesButtonTypename;
  action: Action | null;
  anchor: null | string;
  accessibilityLabel: null;
  icon: null | string;
  loggingEventData: Data | null;
  title: string;
  screenNavigation: null;
  subtitle: null | string;
  button: null;
}

export enum SeeAllHouseRulesButtonTypename {
  BasicListItem = "BasicListItem",
}

export interface Action {
  __typename: string;
  screenId: string;
  loggingData: Data;
}

export interface Data {
  __typename: SelectCheckOutOnlyDateLoggingEventDataTypename;
  loggingId: string;
  component: null | string;
  section: Section | null;
  eventData: null;
  eventDataSchemaName: null;
}

export enum SelectCheckOutOnlyDateLoggingEventDataTypename {
  LoggingEventData = "LoggingEventData",
}

export enum Section {
  Drawer = "drawer",
  HostProfile = "hostProfile",
  Policies = "policies",
}

export interface DescriptionItem {
  __typename: SeeAllHouseRulesButtonTypename;
  title: string;
}

export interface DrawerCalendarLoggingEventData {
  __typename: string;
  clearDatesButton: SeeAllHouseRulesButton;
  selectCheckOutOnlyDateLoggingEventData: Data;
  selectMinNightsViolationDateLoggingEventData: Data;
  selectMaxNightsViolationDateLoggingEventData: Data;
  selectUnavailableForCheckInDateLoggingEventData: Data;
  selectUnavailableForCheckoutDateLoggingEventData: Data;
  selectDateLoggingEventData: Data;
}

export interface HostAvatar {
  __typename: string;
  avatarImage: AvatarImage;
  badge: null;
  userId: string;
  loggingEventData: Data;
}

export interface AvatarImage {
  __typename: string;
  accessibilityLabel: string;
  baseUrl: string;
  id: string;
  onPressAction: null;
}

export interface HostProfileDescription {
  __typename: string;
  htmlText: string;
  readMoreButton: SeeAllHouseRulesButton;
  recommendedNumberOfLines: number;
}

export interface HostTag {
  __typename: SeeAllHouseRulesButtonTypename;
  title: string;
  icon: string;
}

export interface PreviewSafetyAndProperty {
  __typename: string;
  title: string;
  subtitle: null | string;
  icon: string;
  learnMoreButton: SeeAllHouseRulesButton | null;
}

export interface WelcomePrice {
  barPrice: BarPrice;
  price: PricePrice;
}

export interface BarPrice {
  __typename: string;
  accessibilityLabel: string;
  displayPrices: DisplayPrice[];
  explanationData: null;
}

export interface DisplayPrice {
  __typename: string;
  displayRateType: string;
  priceString: string;
  type: string;
}

export interface PricePrice {
  __typename: string;
  discountData: DiscountData;
  promotionBadgeDiscountDisplays: null;
  total: Total;
  priceItems: any[];
}

export interface DiscountData {
  __typename: string;
  tieredPricingDiscountData: null;
  chinaDiscountPromotionData: null;
}

export interface Total {
  __typename: string;
  amount: number;
  amountFormatted: string;
  currency: string;
  amountMicros: number;
  isMicrosAccuracy: boolean;
}

export interface Review {
  _id: string;
  rating: number;
  description: string;
  room: string;
  owner: Owner;
  createdAt: Date;
  updatedAt: Date;
  likeCount: number;
  likes: string[];
  dislikeCount: number;
  dislikes: string[];
  __v: number;
}

export interface Owner {
  _id: string;
  firstName: string;
  lastName: string;
  profilePic: string;
}

