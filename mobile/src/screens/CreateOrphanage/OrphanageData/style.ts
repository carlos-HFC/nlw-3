import { StyleSheet } from "react-native";

import { THEME } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: THEME.COLORS.TEAL_400,
    fontSize: THEME.SIZES["2XL"],
    fontFamily: THEME.FONT_FAMILY.BOLD,
    marginBottom: 32,
    paddingBottom: 24,
    borderBottomWidth: 0.8,
    borderBottomColor: THEME.COLORS.GRAY_200
  },
  label: {
    color: THEME.COLORS.GRAY_500,
    fontFamily: THEME.FONT_FAMILY.SEMI,
    marginBottom: 8,
  },
  comment: {
    fontSize: THEME.SIZES.XS - 1,
    color: THEME.COLORS.GRAY_500,
  },
  input: {
    backgroundColor: THEME.COLORS.WHITE,
    borderWidth: 1.4,
    borderColor: THEME.COLORS.GRAY_200,
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: 'top',
  },
  imagesInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderStyle: 'dashed',
    borderColor: THEME.COLORS.PRIMARY_300,
    borderWidth: 1.4,
    borderRadius: 20,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  nextButton: {
    backgroundColor: THEME.COLORS.GREEN_600,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 32,
  },
  nextButtonText: {
    fontFamily: THEME.FONT_FAMILY.EXTRA,
    fontSize: THEME.SIZES.BASE,
    color: THEME.COLORS.WHITE,
  },
  uploadedImagesContainer: {
    gap: 8,
    width: "100%",
    borderWidth: 1,
    borderColor: THEME.COLORS.GRAY_300,
    borderRadius: 20,
    marginBottom: 8,
    padding: 6,
    paddingRight: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  uploadedImage: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  uploadedImagesInfo: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center"
  },
  uploadedImagesInfoTitle: {
    fontSize: THEME.SIZES.SM,
    fontFamily: THEME.FONT_FAMILY.SEMI,
    lineHeight: THEME.SIZES.SM * 1.5,
    color: THEME.COLORS.GREEN_500
  },
  uploadedImagesInfoSize: {
    fontSize: THEME.SIZES.XS,
    fontFamily: THEME.FONT_FAMILY.SEMI,
    lineHeight: THEME.SIZES.XS * 1.5,
    color: THEME.COLORS.GRAY_500
  }
});